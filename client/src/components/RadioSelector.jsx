import React from "react";
import styled from "styled-components";

function RadioSelector() {
  return (
    <StyledRadioSelector>
      <label htmlFor="radioOptions">
        <div>Radio:</div>
      </label>
      <select name="radioOptions" id="radioOptions">
        <option value="lofi">Lo-Fi</option>
        {/* <option value="chillHop">Chill Hop</option> */}
        {/* <option value="synthwave">Synthwave</option> */}
        {/* <option value="coffeShop">Coffee Shop Blues</option> */}
      </select>
    </StyledRadioSelector>
  );
}

export default RadioSelector;

const StyledRadioSelector = styled.section`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  select {
    /* max-width: 80px; */
  }
`;
