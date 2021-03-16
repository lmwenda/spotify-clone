import React from 'react';

import './Player.css'

import Body from './Body';
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player-body">
                <Sidebar />
                <Body />
                <Footer />
            </div>
        </div>
    );
}

export default Player;
