import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Video.css"
import "../../../resources/css/style.css"


//import foot_icon_0 from '../../../resources/foot_icon/foot_0.png';

const Video = () => {
   return(
    <div className="wrap">
        <div className="container">
            <div className="homebtn">
                <button type="button" class="home">홈으로 돌아가기</button>
            </div>
        </div>
    </div>
   );
}

export default Video;