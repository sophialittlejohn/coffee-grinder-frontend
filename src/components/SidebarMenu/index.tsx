import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { X } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../../elements/Button";
import { H2 } from "../../elements/Heading";
import { Image } from "../../elements/Image";
import { Stack } from "../../layout/Stack";
import { useUserContext } from "../../lib/userContext";

type SidebarMenuProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const StyledImageContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
`;

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ setIsOpen }) => {
  const { user, logout } = useUserContext();
  const { push } = useRouter();

  const handleLogout = () => {
    logout && logout();
    push("/login");
  };

  return (
    <Stack alignItems="center" justifyContent="center" gap="20px">
      <Button variant="icon" onClick={() => setIsOpen(false)}>
        <X color="white" size={32} />
      </Button>
      <StyledImageContainer>
        <Image src="/assets/logo.png" alt="logo" />
      </StyledImageContainer>
      {!user?.id && (
        <Link href="/login" passHref>
          <a href="/login">
            <H2 color="white">Login</H2>
          </a>
        </Link>
      )}
      <Link href="/" passHref>
        <a href="/">
          <H2 color="white">Home</H2>
        </a>
      </Link>
      <Link href="/coffee" passHref>
        <a href="/coffee">
          <H2 color="white">Coffee</H2>
        </a>
      </Link>
      {/* <Link href="/coffeeMachine" passHref>
        <a href="/coffeeMachine">
          <H2 color="white">Coffee Machines</H2>
        </a>
      </Link> */}
      {user?.id && (
        <Button variant="ghost" onClick={handleLogout}>
          <H2 color="white">Logout</H2>
        </Button>
      )}
    </Stack>
  );
};
