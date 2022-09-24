/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Info.css"
import "../../../resources/css/style.css"

import BG from '../../../resources/home_assets/webOS_BG.png';
import homeBtn from '../../../resources/home_assets/home_button_eng.png';

const Info = () => {
    const history = useHistory();

    const onGotoHome = () => {
        history.push("/");
    };

    return(
        <div className="wrap-info">
            <div className="info-frame" style={{background: BG}}>
                
            </div>
            <div className="home-section">
                <img src={homeBtn} width="100px" onClick={onGotoHome} />
            </div>
        </div>
    );
}

export default Info;