import { createContext, Dispatch, SetStateAction, useContext } from "react";

type TabsContextType = {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
};

export const TabsContext = createContext<TabsContextType>({
  active: "",
  setActive: () => undefined,
});

export const useTabsContext = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      `Tabs compound components cannot be rendered outside the Tabs component`
    );
  }
  return context;
};
