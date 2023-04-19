// import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import styled from "styled-components";
import { CreatePlayListIcon, Home, SpeakerIcon } from "../svg";
import { Discovers } from "../svg";
import { LikedIcon } from "../svg";
import { LabIcon } from "../svg";

function MenuItem({ className }) {
  return (
    <>
      <Menu
        className={className}
        items={[
          {
            key: "1",
            icon: <Home />,
            label: "Home",
            className: "nav-list",
          },
          {
            key: "2",
            icon: <Discovers />,
            label: "Discovers",
            className: "nav-list",
          },
        ]}
      />
      <Menu
        className={className}
        defaultSelectedKeys={["4"]}
        items={[
          {
            key: "3",
            icon: <LabIcon />,
            label: "Your Library",
            className: "nav-list",
          },
          {
            key: "4",
            icon: <LikedIcon />,
            label: "Liked Songs",
            className: "nav-list",
          },
          {
            key: "5",
            icon: <SpeakerIcon />,
            label: "Recent Playlist",
            className: "nav-list",
          },
          {
            key: "6",
            icon: <CreatePlayListIcon />,
            label: "Create Playlist",
            className: "nav-list",
          },
        ]}
      />
    </>
  );
}

export const Nav = styled(MenuItem)`
  margin: 1rem 0;
  background: none;
  color: ${(props) => props.theme.color.whiteColor};
  padding-left: 2rem;
  font-size: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #171717fb;

  li {
    padding: 0 !important;
    margin: 0 !important;
    align-items: center;
    &:hover {
      color: ${(props) => props.theme.color.secondaryColor} !important;
    }

    &::selection {
      background: 0 !important;
    }
  }

  .ant-menu-item-selected {
    background: none;
    color: ${(props) => props.theme.color.secondaryColor};
  }

  .nav-list {
    display: flex;
    width: fit-content;
    gap: 0.5rem;
    height: 2.2rem;
    /* text-align: center; */
  }
`;
