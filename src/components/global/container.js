import styled from "styled-components";

export const Container = styled.div`
  background: url(${(props) => props.img});
  background-position: center;
  background-size: contain;
  background-size: ${(props) => (props.hero ? "cover" : "contain")};
  background-color: rgba(0, 0, 0, 0.1);
  width: ${(props) => props.w};
  height: ${(props) => props.h};
`;
