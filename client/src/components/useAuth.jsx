import React, { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await axios.post("http://localhost:3001/login", {
          code,
        });

        console.log(response.data);
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setExpiresIn(response.data.expiresIn);
      } catch (err) {
        console.log(err);
        window.location = "/";
      }
    };
    getToken();
  }, [code]);
}

export default useAuth;
