import React from "react";
import styled from "styled-components";

const Layout = ({ Sider, Content, Mobile, className }) => {
  return (
    <>
      <main className={className}>
        <Sider />
        <Content />
      </main>
      <Mobile />
    </>
  );
};

export const AppLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  gap: 5px;

  @media (max-width: ${(props) => `${props.theme.screen.tablet}px`}) {
    flex-direction: column;
  }
`;
