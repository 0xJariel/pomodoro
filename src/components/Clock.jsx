import React, { useState } from "react";
import { TfiAlarmClock } from "react-icons/tfi";
import styled from "styled-components";

function Clock() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(25);

  const timeLeft = (hours, minutes, seconds) => {
    const hoursLeft = Math.floor(1000 * 60 * 60 * 24);
    const minutesLeft = Math.floor(1000 * 60 * 60);
    const secondsLeft = Math.floor(1000 * 60);

    // returns time left in miliseconds
    return hoursLeft + minutesLeft + secondsLeft;
  };

  const coundown = (timeLeft) => {
    if (timeLeft <= 0) {
      return;
    }
    setInterval(() => {
      seconds <= 0 ? setSeconds(59) : setSeconds(seconds - 1);
    }, 1000);
    // count second down by 1, if second is 0 count minute down by 1
    // input amount of time to countdown
    // start counting down by seconds
    // run a finish function
  };

  const displayTime = ({ value }) => {
    value <= 9 ? `0${value}` : `${value}`;
  };

  return (
    <StyledClock>
      <div className="timer">23:42</div>
      <div className="secondaryTimer">
        <div className="endIcon">
          <TfiAlarmClock />
        </div>
        <div className="endTime">11:32</div>
      </div>
    </StyledClock>
  );
}

export default Clock;

const StyledClock = styled.div`
  display: grid;
  color: white;
  margin-left: auto;
  margin-right: auto;

  .timer {
    font-size: 3.125rem;
  }

  .secondaryTimer {
    display: flex;
    justify-content: center;
  }
`;
