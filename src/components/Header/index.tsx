import { useRouter } from "next/router";
import React, { useState } from "react";
import { ChevronLeft, List, Plus, Search } from "react-bootstrap-icons";
import styled from "styled-components";
import { Button } from "../../elements/Button";
import { H3 } from "../../elements/Heading";
import { Inline } from "../../layout/Inline";
import { Modal } from "../../elements/Modal";
import { HEADER_MAX_HEIGHT } from "../../lib/constants";
import { COLORS } from "../../materials/colors";
import { SidebarMenu } from "../SidebarMenu";

const StyledInline = styled(Inline)`
  margin: 0 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 0 16px;
  max-width: 600px;
  height: ${HEADER_MAX_HEIGHT}px;
`;

interface HeaderProps {
  title: string;
  goBack?: string;
  withAuth?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, goBack, withAuth }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { back, push, pathname } = useRouter();

  return (
    <div style={{ height: `${HEADER_MAX_HEIGHT}px` }}>
      <StyledInline alignItems="center" justifyContent="space-between">
        {goBack ? (
          <Button onClick={back} variant="icon">
            <ChevronLeft color={COLORS.black} size={14} />
          </Button>
        ) : (
          <Modal
            disabled={!withAuth}
            isOpen={menuOpen}
            setIsOpen={setMenuOpen}
            disclosure={
              <List color={withAuth ? COLORS.white : "transparent"} size={24} />
            }
          >
            <SidebarMenu setIsOpen={setMenuOpen} />
          </Modal>
        )}
        <H3>{title}</H3>
        {pathname === "/coffee" ? (
          <Inline
            marginOnLastChild={false}
            justifyContent="flex-end"
            alignItems="center"
            gap="12px"
          >
            <Search size={20} color={COLORS.white} />
            <Button
              variant="icon"
              onClick={() => {
                push("/coffee/new");
              }}
            >
              <Plus color={COLORS.white} size={30} />
            </Button>
          </Inline>
        ) : (
          <List color={"transparent"} />
        )}
      </StyledInline>
    </div>
  );
};
