import styled from "styled-components";

export const Section = styled.section`
  /* background: blue; */
  width: calc();
  width: ${(props) => `calc(${props.w})`};
  ${({ overflow }) => overflow && "overflow-x: scroll"};
  ${({ p }) => (p ? `padding: ${p}px` : "")};
  ${({ m }) => (m ? `margin: ${m}px` : "")};
  ${(props) =>
    props.b
      ? `border: ${props.b}px solid ${props.theme.color.primaryColor}`
      : ""};

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    /* background: ${(props) => props.theme.color.secondaryColor}; */
  }
`;
