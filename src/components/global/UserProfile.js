import React from "react";
import styled from "styled-components";

function UserProfile({ className, img }) {
  return (
    <div className={className}>
      <img src={img} alt="userImage" className="user-img" />
      <div>Hey! Aleem</div>
    </div>
  );
}

export default styled(UserProfile)`
  background: ${(props) => props.theme.color.primaryColor};
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-left: 1rem;
  font-size: 16px;
  height: 6rem;

  .user-img {
    border-radius: 100%;
  }
`;
