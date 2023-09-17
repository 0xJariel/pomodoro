import React from "react";
import { FaSpotify } from "react-icons/fa";
import styled from "styled-components";

function WelcomeUserMsg(userID) {
  return (
    <StyledWelcomeMsg>
      Welcome Jay {`:)`} <FaSpotify />
    </StyledWelcomeMsg>
  );
}

export default WelcomeUserMsg;

const StyledWelcomeMsg = styled.footer`
  display: flex;
  gap: 8px;
  padding-bottom: 12px;
  align-self: flex-end;
  justify-self: center;
`;
