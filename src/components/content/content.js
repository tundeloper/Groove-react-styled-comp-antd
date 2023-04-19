import React from "react";
import { SearchNav } from "./Searchbar/index";
import { Prev, Forward, SearchIcon } from "../svg";
import { Section } from "../global/section";
import { Container } from "../global/container";
import hero from "../../asset/hero.png";
// import hero2 from "../../asset/hero.png";
import PlaylistGroup from "./playlistGroup/playlistGroup";
import { Space } from "antd";
import styled from "styled-components";

export default function StyledCont({ className }) {
  return (
    <div className={className}>
      <SearchNav PrevIcon={Prev} ForwIcon={Forward} SearchIcon={SearchIcon} />
      <Section p="5" b="2">
        <Space direction="vertical" size={[0, 20]}>
          <Container img={hero} w="100rem" h="20rem" hero />
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
`;
