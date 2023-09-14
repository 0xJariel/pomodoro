import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <StyledNavbar>
      <a href="/">Pomodoro</a>
      <a href="/settings">Settings</a>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-top: 12px;
  gap: 15px;
  font-size: 18px;
  align-self: flex-start;
`;
