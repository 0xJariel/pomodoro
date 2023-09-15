import React from "react";
import styled from "styled-components";

function ClockSelector() {
  return (
    <StyledClockForm>
      <div className="option">
        <input type="radio" name="clockOptions" id="focus" />
        <label htmlFor="focusOptions">
          <select name="focusOptions" id="focusOptions">
            <option value="focus">Focus</option>
            <option value="studying">Studying</option>
            <option value="gaming">Gaming</option>
          </select>
        </label>
      </div>
      <div className="option">
        <input type="radio" name="clockOptions" id="breakL" />
        <label htmlFor="breakL">{`Break (L)`}</label>
      </div>
      <div className="option">
        <input type="radio" name="clockOptions" id="breakS" />
        <label htmlFor="breakS">{`Break (S)`}</label>
      </div>

      <div></div>
      <div></div>
      <div></div>
    </StyledClockForm>
  );
}

export default ClockSelector;

const StyledClockForm = styled.form`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  padding-top: 12px;
  padding-bottom: 65px;

  .option {
    /* display: flex;
    gap: 8px; */
  }
`;
