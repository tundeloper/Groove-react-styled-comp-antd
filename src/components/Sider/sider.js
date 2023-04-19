import React from "react";
import img from "../../asset/background.svg";
import { Container } from "../global/container";
import UserProfile from "../global/UserProfile";
import user from "../../asset/User.png";
import { Nav } from "./nav";
import { Playlist } from "./Playlist";

function Sider() {
  return (
    <>
      <Container img={img} w="19rem" h="100%">
        <UserProfile img={user} />
        <Nav />
        <Playlist />
      </Container>
    </>
  );
}

export default Sider;
