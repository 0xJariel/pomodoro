import React, { useState } from "react";
import {
  CgPlayBackwards,
  CgPlayButtonO,
  CgPlayPauseO,
  CgPlayForwards,
} from "react-icons/cg";
import styled from "styled-components";

function MusicControls() {
  const [playing, setPlaying] = useState(false);

  return (
    <StyledMusicControls>
      <div>
        <CgPlayBackwards size={42} />
      </div>
      <div
        onClick={() => {
          playing ? setPlaying(false) : setPlaying(true);
        }}
      >
        {playing ? <CgPlayPauseO size={54} /> : <CgPlayButtonO size={54} />}
      </div>
      <div>
        <CgPlayForwards size={42} />
      </div>
    </StyledMusicControls>
  );
}

export default MusicControls;

const StyledMusicControls = styled.section`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
