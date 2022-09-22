/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Video.css"
import "../../../resources/css/style.css"

const Video = () => {
    const history = useHistory();

    const onGotoHome = () => {
        history.push("/");
    };

    return(
        <div className="wrap-video">
            <div className="video-frame">
                <div className="video"></div>
            </div>
            <div className="home-button" onClick={onGotoHome}>
                    {/* <img src={addBtn} width="50px" height="30px"/> */}
            </div>
        </div>
    );
}

export default Video;