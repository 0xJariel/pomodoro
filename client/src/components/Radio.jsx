import React from "react";
import { HiMiniMusicalNote } from "react-icons/hi2";
import { BsFillSkipEndFill } from "react-icons/bs";
import styled from "styled-components";

function Radio({ playlists, currentTrack, handleSkipTrack }) {
  return (
    <StyledRadio>
      <div>
        <label htmlFor="playlists">Radio:</label>
        <select id="playlists" name="playlists">
          <option value="Lo-Fi">Lo-Fi</option>
        </select>
      </div>
      <div className="icon">
        <HiMiniMusicalNote />
      </div>
      <div className="icon">
        <BsFillSkipEndFill />
      </div>
    </StyledRadio>
  );
}

export default Radio;

const StyledRadio = styled.section`
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 6px;

  .icon {
    font-size: 20px;
    display: grid;
    /* background-color: rebeccapurple; */
    align-self: center;
  }

  #playlists {
    margin-left: 5px;
  }
`;
