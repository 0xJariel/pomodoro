import React, { useState, useEffect } from "react";
import styled from "styled-components";

function DisplayTimer() {
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
  }, [isRunning, minutes, seconds]);

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
    <StyledDisplayCounter>
      <div>{minutes > 9 ? minutes : `0${minutes}`}</div>
      <div>:</div>
      <div>{seconds > 9 ? seconds : `0${seconds}`}</div>
      <div>
        {!isRunning ? (
          <button onClick={handleStart} disabled={isRunning}>
            Start
          </button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
      </div>

      <button onClick={handleReset}>Reset</button>
    </StyledDisplayCounter>
  );
}

export default DisplayTimer;

const StyledDisplayCounter = styled.div`
  display: flex;
`;
