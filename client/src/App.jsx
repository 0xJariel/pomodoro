import { useStatem, useMemo, useEffect, useState, context } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation, Outlet, useOutletContext } from "react-router-dom";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import CreateUser from "./Hooks/CreateUser";
import CreateUserList from "./Hooks/CreatePlaylistList";
import WelcomeUserMsg from "./components/WelcomeUserMsg";
import CreatePlaylistList from "./Hooks/CreatePlaylistList";
import Countdown from "./Hooks/Countdown";

const spotifyApi = new SpotifyWebApi({
  clientId: "9cae559518c9414eaf7cb90673188a83",
});

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  const { isRunning, handleStart, handlePause, handleReset } = Countdown({
    seconds,
    minutes,
    setMinutes,
    setSeconds,
  });

  const [currentPlaylist, setCurrentPlaylist] = useState();
  const [playlists, setPlaylists] = useState([]);

  const location = useLocation();

  // used this because strict causes 2 excecutions
  const code = useMemo(() => {
    return new URLSearchParams(location.search).get("code");
  }, [location.search]);

  const accessToken = useAuth(code);

  const { userID, displayName } = CreateUser(accessToken, spotifyApi);
  const { playlistList } = CreatePlaylistList(accessToken, spotifyApi);

  // const { allPlaylists } = createPlayList(defaultList, userList);

  const createDisplayName = () => {};

  return (
    <StyledApp>
      <Navbar />
      <Outlet
        context={{
          accessToken,
          spotifyApi,
          minutes,
          setMinutes,
          seconds,
          setSeconds,
          isRunning,
          handleStart,
          handlePause,
          handleReset,
        }}
      />
      {code ? <WelcomeUserMsg displayName={displayName} /> : <Footer />}
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.main`
  display: grid;
  background-color: #ffffff;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.25);
  max-width: 280px;
  /* min-height: 432px; */
  /* height: 400px; */
  border-radius: 24px;
  gap: 12px;
`;
