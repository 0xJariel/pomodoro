import React from "react";
import Clock from "../components/Clock";
import ClockSelector from "../components/ClockSelector";
import RadioSelector from "../components/RadioSelector";
import MusicControls from "../components/MusicControls";
import styled from "styled-components";
import DisplayTimer from "../components/DisplayCounter";
import { useState, useEffect } from "react";
import TimerControls from "../components/TimerControls";
import PomodoroMessage from "../components/PomodoroMessage";
import Radio from "../components/Radio";

function Pomodoro() {
  const [length, setLength] = useState({ minutes: 25, seconds: 0 });
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  // used to play pause music
  const [isRunning, setIsRunning] = useState(false);

  const decreaseMinute = () => {
    setMinutes(minutes - 1);
  };

  const decreaseSecond = () => {
    setSeconds((prevSeconds) => (prevSeconds === 0 ? 59 : prevSeconds - 1));
  };

  useEffect(() => {
    let countdownInterval;

    if (isRunning) {
      countdownInterval = setInterval(() => {
        console.log("interval running");
        decreaseSecond();
        if (seconds === 0 && minutes > 0) {
          decreaseMinute();
        }
      }, 1000);
    }

    return () => {
      clearInterval(countdownInterval); // Clear the interval when the component unmounts
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMinutes(length.minutes);
    setSeconds(length.seconds);
  };

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
