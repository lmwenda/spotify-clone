import React, { useEffect } from "react";
import './App.css';
import { useDataLayer } from "./Data/DataLayer";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Login from "./Components/Login/Login";
import Player from "./Components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayer();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user
        });

      });
    }

    console.log("I HAVE A TOKEN", _token);
  }, []);

  console.log("User: ", user);

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
