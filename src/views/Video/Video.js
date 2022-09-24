/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from '@enact/sandstone/Button'

import "./Video.css"
import "../../../resources/css/style.css"
import homeBtn from "../../../resources/home_assets/home_button_eng.png";

const Video = () => {
    const history = useHistory();

    const onGotoHome = () => {
        history.push("/");
    };

    return(
        <div className="wrap-video">
            <div className="video-frame">
                <div className="video"></div> {/*여기에 비디오 넣기*/}
            </div>
            <div className="home-button" onClick={onGotoHome}>
                <img src={homeBtn} width="80px" height="45px"/>
            </div>
        </div>
    );
}

export default Video;