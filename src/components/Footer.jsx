import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <div>Login with</div>
      <a href=""> Spotify</a>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  gap: 8px;
  padding-bottom: 12px;
  align-self: flex-end;
  justify-self: center;
`;
