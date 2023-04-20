import React from "react";
import { SearchNav } from "./Searchbar/index";
import { Prev, Forward, SearchIcon, UduXIcon } from "../svg";
import { Section } from "../global/section";
import { Container } from "../global/container";
import hero from "../../asset/hero.png";
import user from "../../asset/User.png";
import PlaylistGroup from "./playlistGroup/playlistGroup";
import { Space } from "antd";
import styled from "styled-components";
import UserProfile from "../global/UserProfile";

export default function StyledCont({ className }) {
  return (
    <div className={className}>
      <SearchNav PrevIcon={Prev} ForwIcon={Forward} SearchIcon={SearchIcon} />
      <div className="user">
        <UserProfile img={user} />
      </div>
      <Section p="5" b="2" className="mobile">
        <Space direction="vertical" size={[0, 20]}>
          <Container img={hero} w="100rem" h="14rem" hero p="1rem">
            <UduXIcon />
          </Container>
          <PlaylistGroup />
        </Space>
      </Section>
    </div>
  );
}

export const Content = styled(StyledCont)`
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.color.secondaryColor};
  }

  .user {
    display: none;
  }

  @media (max-width: ${(props) => `${props.theme.screen.tablet}px`}) {
    .mobile {
      margin-bottom: 6rem;
    }
    .user {
      display: block;
    }
  }
`;
