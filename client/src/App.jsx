import { useStatem, useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation, Outlet } from "react-router-dom";
import useAuth from "./useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import CreateUser from "./Hooks/CreateUser";
import CreateUserList from "./Hooks/CreateUserList";
import CreateDefaultList from "./Hooks/CreateDefaultList";
import CreatePlaylist from "./Hooks/CreatePlaylist";
import WelcomeUserMsg from "./components/WelcomeUserMsg";

const spotifyApi = new SpotifyWebApi({
  clientId: "9cae559518c9414eaf7cb90673188a83",
});

function App() {
  const [currentPlaylist, setCurrentPlaylist] = useState();
  const [playlists, setPlaylists] = useState([]);

  const location = useLocation();

  // used this because strict causes 2 excecutions
  const code = useMemo(() => {
    return new URLSearchParams(location.search).get("code");
  }, [location.search]);

  const accessToken = useAuth(code);

  const { userID, displayName } = CreateUser(accessToken, spotifyApi);
  const { defaultList } = CreateDefaultList();
  const { userList } = CreateUserList(accessToken, spotifyApi);
  // const { allPlaylists } = createPlayList(defaultList, userList);
  const [playList, setPlaylist] = useState(defaultList[0]);

  const createDisplayName = () => {};

  return (
    <StyledApp>
      <Navbar />
      <Outlet />
      {code ? <WelcomeUserMsg /> : <Footer />}
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
