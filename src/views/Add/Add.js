/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Add.css"
import "../../../resources/css/style.css"

const Video = () => {
    const history = useHistory();

    const onGotoHome = () => {
        history.push("/");
    };

    return(
        <div className="wrap">
            <div className="container">
                <div className="homebtn">
                    <button onClick={onGotoHome}>
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Video;