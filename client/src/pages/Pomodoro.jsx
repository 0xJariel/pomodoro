import React, { useContext } from "react";
import styled from "styled-components";
import DisplayTimer from "../components/DisplayCounter";
import { useState, useEffect } from "react";
import TimerControls from "../components/TimerControls";
import PomodoroMessage from "../components/PomodoroMessage";
import Radio from "../components/Radio";
import Countdown from "../Hooks/Countdown";

function Pomodoro() {
  const { isRunning, handleStart, handlePause, handleReset } = Countdown();

  const [length, setLength] = useState({ minutes: 25, seconds: 0 });
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  return (
    <StyledPomodoro>
      <DisplayTimer minutes={minutes} seconds={seconds} />
      <PomodoroMessage minutes={minutes} seconds={seconds} />
      <Radio />
      <TimerControls
        isRunning={isRunning}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
    </StyledPomodoro>
  );
}

export default Pomodoro;

const StyledPomodoro = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  gap: 16px;
  padding-top: 20px;
  padding-bottom: 10px;
`;
