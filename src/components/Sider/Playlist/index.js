import React from "react";
import styled from "styled-components";
import { PlayListIcon, SearchIcon } from "../../svg";

function Play({ className }) {
  const data = [
    "Riffs $ Runs",
    "African Heat",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
    "Saturday was a Good day",
    "African Heat",
    "Riffs $ Runs",
    "Gidi Night",
    "Running Out of Play list na",
    "Saturday was a Good day",
  ];

  return (
    <>
      <div className={className}>
        <div className="play-list-icon">
          <div>
            <PlayListIcon />
            <p>My Playlist</p>
          </div>
          <div className="search">
            <SearchIcon />
          </div>
        </div>
        <div className="play-list">
          <ul>
            {data.map((list) => {
              return (
                <li key={Math.random()} className="">
                  {list}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export const Playlist = styled(Play)`
  /* background: red; */
  height: 49vh;

  .play-list-icon {
    padding-left: 2rem;
    padding-right: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    div {
      font-weight: 550;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }

  .play-list {
    height: 80%;
    margin-top: 1rem;
    margin-left: 2rem;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.color.secondaryColor};

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.secondaryColor};
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      li {
        width: 100%;
        font-weight: 110;
        text-overflow: "...";
        white-space: nowrap;
      }
    }
  }

  .search {
    color: ${(props) => props.theme.color.whiteColor};
  }
`;
