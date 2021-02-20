import { useState } from "react";
import styled from "styled-components";
import { Button } from "../../elements/Button";
import { TabsContext, useTabsContext } from "./context";

type TabsProps = {
  defaultActive?: string;
};

type TabId = {
  id: string;
};

type TabsComposition = {
  Label: React.FC<TabId>;
  Content: React.FC<TabId>;
};

const StyledTab = styled(Button)<{ active: boolean }>`
  background: transparent;
  border: none;
  width: 50%;
  border-bottom: 3px solid ${({ active }) => (active ? "white" : "transparent")};
  outline: none;
`;

export const Tabs: React.FC<TabsProps> & TabsComposition = ({
  children,
  defaultActive,
}) => {
  const [active, setActive] = useState(defaultActive || "");

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
};

const Label: React.FC<TabId> = ({ children, id }) => {
  const { active, setActive } = useTabsContext();

  return (
    <StyledTab
      variant="ghost"
      active={active === id}
      onClick={() => setActive(id)}
    >
      {children}
    </StyledTab>
  );
};

const Content: React.FC<TabId> = ({ id, children }) => {
  const { active } = useTabsContext();
  if (id === active) {
    return <>{children}</>;
  }
  return null;
};

Tabs.Label = Label;
Tabs.Content = Content;
