import React from "react";
import styled from "styled-components";

function PomodoroMessage({ minutes, seconds }) {
  return (
    <StyledMessage>
      <div className="img"></div>
      <div className="motivation">
        {minutes !== 0 || seconds !== 0 ? (
          <div className="start">Finish a session to grow a tomato</div>
        ) : (
          <div className="end">
            Congrats!! You focused for 25 minutes and grew a tomato!
          </div>
        )}
      </div>
    </StyledMessage>
  );
}

export default PomodoroMessage;

const StyledMessage = styled.section`
  justify-self: center;
  padding-top: 15px;
  padding-bottom: 25px;

  .img {
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    width: 100px;
    /* background-color: rebeccapurple; */
  }
  .start {
    font-size: 18px;
    max-width: 140px;
    text-align: center;
  }
  .end {
    font-size: 18px;
    max-width: 220px;
    text-align: center;
  }
`;
