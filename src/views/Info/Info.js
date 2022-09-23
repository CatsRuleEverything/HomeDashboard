/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Info.css"
import "../../../resources/css/style.css"

const Info = () => {
    const history = useHistory();

    const onGotoHome = () => {
        history.push("/");
    };

    return(
        <div className="wrap-info">
            <div className="info-frame">
                <div className="info"></div>
            </div>
            <div className="home-button" onClick={onGotoHome}>
                    <img src={addBtn} width="50px" height="30px"/>
            </div>
        </div>
    );
}

export default Info;