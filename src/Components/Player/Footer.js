import React from "react";
import { Grid, Slider } from "@material-ui/core";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <div className="footer_details">
                <img className="footer_image"
                src={"https://images.genius.com/ec02a06b4e57e742de70eafc2b1ab014.1000x1000x1.png"}
                alt="" />
                <div>
                    <p id="title">Freestyle</p>
                    <p>Lil Baby</p>
                </div>
            </div>

            <div className="footer_controls">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon
                    fontSize="large"
                    className="footer__icon"
                />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer_volume">
                <Grid container spacing={0.3}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider id="slider" aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer; 
