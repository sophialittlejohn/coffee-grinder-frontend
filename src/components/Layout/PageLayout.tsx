import React from "react";
import styled from "styled-components";
import { Header } from "../Header";
import { COLORS } from "../../materials/colors";
import { HEADER_MAX_HEIGHT } from "../../lib/constants";

const StyledHeaderWrapper = styled.div`
  position: relative;
  max-width: 600px;
  height: ${HEADER_MAX_HEIGHT};
  width: 100%;
`;

const StyledPageLayout = styled.main<Pick<PageLayoutProps, "background">>`
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  position: sticky;
  background-color: ${COLORS.lightYellow};
  ${(props) =>
    props.background === "login" &&
    `
  background-image: url("assets/login-splash.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  `}
`;

const StyledContent = styled.div`
  position: relative;
`;

interface PageLayoutProps {
  title: string;
  withAuth?: boolean;
  goBack?: string;
  background?: "login";
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  withAuth,
  goBack,
  background,
}) => {
  return (
    <StyledPageLayout background={background}>
      <StyledHeaderWrapper>
        <Header title={title} goBack={goBack} withAuth={withAuth} />
      </StyledHeaderWrapper>
      <StyledContent>{children}</StyledContent>
    </StyledPageLayout>
  );
};
