import React, { useEffect } from "react";
import './App.css';
import { getTokenFromResponse } from "./spotify";
import Login from "./Components/Login/Login";

function App() {
  const [ token, setToken ] = React.useState("");

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
    }
    
  }, [])

  return (
    <div className="App">
      {
        token ? (
          <h1>You've Sucessfully Logged In!</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
