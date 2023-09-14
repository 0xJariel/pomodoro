import React from "react";
import Clock from "../components/Clock";
import ClockSelector from "../components/ClockSelector";
import RadioSelector from "../components/RadioSelector";
import MusicControls from "../components/MusicControls";
import styled from "styled-components";
import DisplayTimer from "../components/DisplayCounter";

function Pomodoro() {
  return (
    <StyledPomodoro>
      <DisplayTimer />
      {/* <Clock />
      <ClockSelector />
      <RadioSelector />
      <MusicControls /> */}
    </StyledPomodoro>
  );
}

export default Pomodoro;

const StyledPomodoro = styled.div`
  display: grid;
  justify-content: center;
  gap: 12px;
`;
