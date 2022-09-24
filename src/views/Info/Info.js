/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Info.css"
import "../../../resources/css/style.css"

import BG from '../../../resources/home_assets/webOS_BG.png';
import profile_bg from '../../../resources/home_assets/circle_dots.png';
import homeBtn from '../../../resources/home_assets/home_button_eng.png';

import sample_profile_image from '../../../resources/prototype.png';

const Info = () => {
    const history = useHistory();

    const onGotoHome = () => {
        history.push("/");
    };

    return(
        <div className="wrap-info">
            <div className="info-frame">
                <div className="info-top">
                    <div className="bio-info">
                        마루 27개월 5kg <br/>
                        포메라니안 (암컷)
                    </div>
                    <div className="title-info">
                        Health 리포트 <br/>
                        <div style={{backgroundColor: 'red',width:'100%',height:'10px'}}></div>
                    </div>
                </div>
                <div className="info-prof">
                    <img className="prof" src={sample_profile_image} />
                    <img className="prof_bg" src={profile_bg} />
                </div>
                <img className="bg" src={BG} />
            </div>
            <div className="home-section">
                <img src={homeBtn} width="100px" onClick={onGotoHome} />
            </div>
        </div>
    );
}

export default Info;