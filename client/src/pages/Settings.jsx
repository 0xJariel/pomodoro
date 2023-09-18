import React from "react";
import styled from "styled-components";
import { useContext } from "react";

function Settings({ minutes, seconds, setMinutes, setSeconds }) {
  return (
    <StyledSettings>
      Set Timer:
      <div className="option">
        Minutes:
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
      </div>
      <div className="option">
        Seconds:
        <input type="number" />
      </div>
    </StyledSettings>
  );
}

export default Settings;

const StyledSettings = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: grid;
  justify-content: center;

  gap: 8px;

  input {
    width: 70px;
  }
`;
