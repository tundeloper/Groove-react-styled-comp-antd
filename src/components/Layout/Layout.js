import React from "react";
import styled from "styled-components";

const Layout = ({ Sider, Content, className }) => {
  return (
    <main className={className}>
      <Sider />
      <Content />
    </main>
  );
};

export const AppLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  /* position: fixed; */
  display: flex;
  gap: 5px;
`;
