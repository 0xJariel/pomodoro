import React, { useState } from "react";
import { HiMiniMusicalNote } from "react-icons/hi2";
import { BsFillSkipEndFill } from "react-icons/bs";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import CreatePlaylistList from "../Hooks/CreatePlaylistList";

function Radio() {
  const { accessToken, spotifyApi } = useOutletContext();
  const { playlistList } = CreatePlaylistList(accessToken, spotifyApi);
  console.log(playlistList);

  const allPlaylists = null;

  const [currentPlaylist, setCurrentPlaylist] = useState();

  const displayPlaylists = (allPlaylists) => {
    return allPlaylists.map((list, i) => (
      <option key={i} value={list.playlistID}>
        {list.name}
      </option>
    ));
  };

  return (
    <StyledRadio>
      <div>
        <label htmlFor="playlists">Radio:</label>
        <select
          id="playlists"
          name="playlists"
          onChange={(e) => console.log(e.target.value)}
        >
          {playlistList ? (
            displayPlaylists(playlistList)
          ) : (
            <option value="">Log in!</option>
          )}
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
    max-width: 100px;
  }
`;
