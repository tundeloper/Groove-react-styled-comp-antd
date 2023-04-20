import styled from "styled-components";

export const Label = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.5;

  @media (max-width: ${(props) => `${props.theme.screen.tablet}px`}) {
    font-size: 1.2rem;
  }
`;
