import React from "react";

function CreatePlaylist() {
  const getPlaylistFromID = async (defaultList) => {
    try {
      const response = spotifyApi.getPlaylist("4WX5OTb36RgzXqPpRLg4dQ");
    } catch (err) {
      console.log(err);
    }
  };
  spotifyApi.getPlaylist("4WX5OTb36RgzXqPpRLg4dQ").then(
    function (data) {
      console.log("Some information about this playlist", data.body);
      console.log(data.body.description);
      // playlists.push({name: data.body.name, description: data.body.description})
    },
    function (err) {
      console.log("Something went wrong!", err);
    }
  );
}

export default CreatePlaylist;