import React from "react";
import img from "../../asset/background.svg";
import { Container } from "../global/container";
import UserProfile from "../global/UserProfile";
import user from "../../asset/User.png";
import { Nav } from "./nav";
import { Playlist } from "./Playlist";
import styled from "styled-components";

function Side({ className }) {
  return (
    <>
      <Container img={img} w="19rem" h="100%" className={className}>
        <UserProfile img={user} />
        <Nav />
        <Playlist />
      </Container>
    </>
  );
}

export const Sider = styled(Side)`
  @media (max-width: ${(props) => `${props.theme.screen.tablet}px`}) {
    display: none;
  }
`;
