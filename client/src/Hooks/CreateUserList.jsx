import React from "react";
import { useEffect, useState } from "react";

// i think i can make it more efficient by detecting user id change instead of access token? but i think i need info on the backed
function CreateUserList(accessToken, spotifyApi) {
  const [userList, setUserList] = useState();
  useEffect(() => {
    if (!accessToken) return;
    const list = [];
    // set access token, playlists to choose from
    spotifyApi.setAccessToken(accessToken);

    spotifyApi.getUserPlaylists().then(
      function (data) {
        console.log(data.body.items);
        const arr = data.body.items;
        arr.forEach((item) => {
          console.log(item.name, item.id);
          list.push({ name: item.name, id: item.id });
        });
        console.log("Retrieved playlists", data.body);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
    setUserList(list);
  }, [accessToken]);

  return { userList };
}

export default CreateUserList;
