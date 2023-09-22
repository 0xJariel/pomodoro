import React from "react";
import styled from "styled-components";
import { BsQuestionCircleFill, BsBackspaceFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { RiSettings3Fill } from "react-icons/ri";

function Navbar() {
  const location = useLocation();

  return (
    <StyledNavbar>
      {location.pathname !== "/" ? (
        <a href="/">
          <BsBackspaceFill size={24} color="black" />
        </a>
      ) : (
        <a href="/settings">
          <RiSettings3Fill size={22} color="black" />
        </a>
      )}
      <a href="">
        <BsQuestionCircleFill size={20} color="black" />
      </a>
    </StyledNavbar>
  );
}

export default Navbar;

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 12px;
  margin-right: 12px;
  padding-top: 12px;
  gap: 15px;
  font-size: 18px;
`;
