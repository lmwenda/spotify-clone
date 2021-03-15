import React from "react";
import { loginURL } from "../../spotify";
import './Login.css';

function Login(){
    const phoneSize = window.matchMedia('(max-width: 600px)');
    const mql = phoneSize.matches;

    if(!mql){
        return(
            <div className="login">
                <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
                />
                <a href={loginURL}>LOGIN WITH SPOTIFY</a>
            </div>
        );
    }else{
        return(
            <div className="login">
                <img style={{width: '80%'}}
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
                />
                <a href={loginURL}>LOGIN WITH SPOTIFY</a>
            </div>
        );
    }
}

export default Login;
