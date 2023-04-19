import React from "react";
import styled from "styled-components";
import bg from "../../asset/background.svg";
import { SpeakerIcon, Home, Discovers, CreatePlayListIcon } from "../svg";

export default function Mobile({ className }) {
  return (
    <div className={className}>
      <div>
        <Home />
      </div>
      <div>
        <Discovers />
      </div>
      <div>
        <SpeakerIcon />
      </div>
      <div className="space">
        <CreatePlayListIcon />
      </div>
    </div>
  );
}

export const MobileNav = styled(Mobile)`
  display: none;
  background-image: url(${bg});
  background-position: cover;
  width: calc(100% - 0.1vw);
  background-color: #171717fb;
  height: 4rem;
  /* padding-right: 2rem 2rem; */

  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  bottom: 0;
  z-index: 4;
  cursor: pointer;

  div:hover {
    color: ${(props) => props.theme.color.secondaryColor};
  }

  .space {
    /* margin-right: 3rem; */
  }

  @media (max-width: ${(props) => `${props.theme.screen.tablet}px`}) {
    display: flex;
  }
`;
