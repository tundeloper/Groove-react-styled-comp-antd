import React from "react";
import styled from "styled-components";

function Search({ PrevIcon, ForwIcon, SearchIcon, className }) {
  return (
    <div className={className}>
      <div className="nav">
        <span>
          <PrevIcon />
        </span>
        <span>
          <ForwIcon />
        </span>
      </div>

      <form className={"form"}>
        <div>
          <input type="text" className="input" />
          <div className={"search_svg"}>
            <SearchIcon></SearchIcon>
          </div>
        </div>
      </form>
    </div>
  );
}

export const SearchNav = styled(Search)`
  padding: 1rem;
  width: 100%;
  /* background-color: blue; */
  display: flex;
  align-items: center;
  gap: 3rem;

  .form div {
    position: relative;
    /* width: auto;
  height: auto; */
  }

  .nav {
    margin-top: -0.7rem;
  }

  .nav span {
    padding: 0.2rem 1rem 0.2rem 1rem;
    padding-top: 1rem;
    background: #171717fb;
    /* background: blue; */
    margin-right: 2rem;
    cursor: pointer;
  }

  .input {
    width: 15rem;
    height: 2.5rem;
    background: transparent;
    color: white;
    border: 1px solid rgb(37, 36, 36);
    padding-left: 2rem;

    &:focus {
      outline: none;
      border-color: rgb(37, 36, 36);
    }
  }

  .search_svg {
    position: absolute;
    top: -1.7rem;
    left: 0.5rem;
    z-index: -1;
  }

  @media (max-width: ${(props) => `${props.theme.screen.tablet}px`}) {
    display: none;
  }
`;
