import { useStatem, useMemo, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation, Outlet } from "react-router-dom";
import useAuth from "./components/useAuth";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "9cae559518c9414eaf7cb90673188a83",
});

function App() {
  const [playlistID, setPlaylistID] = useState();
  const [playlists, setPlaylists] = useState();
  const [displayName, setDisplayName] = useState();
  const location = useLocation();

  const code = useMemo(() => {
    return new URLSearchParams(location.search).get("code");
  }, [location.search]);

  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    // set access token, playlists to choose from
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;

    // Get the authenticated user
    spotifyApi.getMe().then(
      function (data) {
        console.log("Some information about the authenticated user", data.body);
        setDisplayName(data.body.display_name);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    spotifyApi.getPlaylist("5ieJqeLJjjI8iJWaxeBLuK").then(
      function (data) {
        console.log("Some information about this playlist", data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );

    // Get a user's playlists
    spotifyApi.getUserPlaylists("thelinmichael").then(
      function (data) {
        console.log("Retrieved playlists", data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  }, [accessToken, playlistID]);

  return (
    <StyledApp>
      <Navbar />
      <Outlet />
      {code ? <h4>{accessToken}</h4> : <Footer />}
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.main`
  display: grid;
  background-color: #1e1e1e;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.25);
  max-width: 280px;
  /* height: 400px; */
  border-radius: 8%;
  gap: 12px;
`;
