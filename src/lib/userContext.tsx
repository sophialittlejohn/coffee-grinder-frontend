import { useMutation, useQuery } from "@apollo/client";
import { destroyCookie } from "nookies";
import React, { useContext, useEffect, useState } from "react";
import { CoffeeMachine } from "../components/CoffeeMachine/types";
import { USER_QUERY, UPDATE_USER } from "./queries";

export type User = {
  id: number;
  name: string;
  email?: string;
  coffeeMachines: CoffeeMachine[];
  primaryMachine?: number;
};

type UserValue = Partial<Record<keyof User, any>>;

type UserContext = {
  user: null | User;
  setUser?: React.Dispatch<React.SetStateAction<User | null>>;
  logout?: () => void;
  updateUser: (value: UserValue) => Promise<void>;
};

const defaultUserContext: UserContext = {
  user: null,
  updateUser: () => Promise.resolve(),
};

const UserContext = React.createContext(defaultUserContext);

export const ContextUser: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const { data, refetch } = useQuery<{ user: User }>(USER_QUERY);
  const [updateUserMutation, { data: updatedUser }] = useMutation(UPDATE_USER);

  const logout = () => {
    destroyCookie(null, "token");
    setUser(null);
  };

  const updateUser = async (value: UserValue) => {
    try {
      await updateUserMutation({ variables: value });
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    if (data?.user && refetch) {
      const { user } = data;
      setUser(user);
      refetch();
    }

    if (updatedUser && refetch) {
      setUser(updatedUser.updateUser);
      refetch();
    }
  }, [data, refetch, updatedUser]);

  return (
    <UserContext.Provider
      value={{
        logout,
        user,
        setUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  return context;
};
