import React, { useState, useEffect } from "react";
import styled from "styled-components";

function DisplayTimer({ minutes, seconds }) {
  return (
    <StyledDisplayCounter>
      <div>{minutes > 9 ? minutes : `0${minutes}`}</div>
      <div>:</div>
      <div>{seconds > 9 ? seconds : `0${seconds}`}</div>

      {/* <button onClick={handleReset}>Reset</button> */}
    </StyledDisplayCounter>
  );
}

export default DisplayTimer;

const StyledDisplayCounter = styled.section`
  display: flex;
`;
