/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Home.css"
import "../../../resources/css/style.css"

import foot_icon_0 from '../../../resources/foot_icon/foot_0.png';
import foot_icon_1 from '../../../resources/foot_icon/foot_1.png';
import foot_icon_2 from '../../../resources/foot_icon/foot_2.png';
import foot_icon_3 from '../../../resources/foot_icon/foot_3.png';
import foot_icon_4 from '../../../resources/foot_icon/foot_4.png';
import rfoot_icon_0 from '../../../resources/foot_icon/rfoot_0.png';
import rfoot_icon_1 from '../../../resources/foot_icon/rfoot_1.png';
import rfoot_icon_2 from '../../../resources/foot_icon/rfoot_2.png';
import rfoot_icon_3 from '../../../resources/foot_icon/rfoot_3.png';
import rfoot_icon_4 from '../../../resources/foot_icon/rfoot_4.png';

import sample_profile_image from '../../../resources/prototype.png';

const Home = () => {
    const history = useHistory();

    const onGotoVideo = () => {
        history.push("/video");
    };

    /* sample pet data */
    var p1 = ['마루', '0', '2'];
    var p2 = ['초코', '3', '2'];
    var p3 = ['쿠키', '2', '0'];
    
    var pet_data = [p1, p2, p3];
    /* *************** */

    var pet1 = {};
    var pet2 = {};
    var pet3 = {};
    var pets = [pet1, pet2, pet3];

    for (var i = 0; i < 3; i++) {

        if (pet_data[i] == null) continue;

        pets[i]['name'] = pet_data[i][0];
        pets[i]['water_status'] = pet_data[i][1];
        pets[i]['feed_status'] = pet_data[i][2];
    }

    var Pet_info = ({pets_idx}) => {
        if (Object.keys(pets[pets_idx]).length <= 0) return;

        return (
            <div className="info-box" id={"pet" + {pets_idx}}>
                <div className="pet-name">
                    <p className="ptag">
                        {pets[pets_idx]['name']}
                    </p>
                </div>
                <div className="pet-image">
                    <img className="pet-image-inner" src={sample_profile_image}/>
                </div>
                <img className="water-status" src={
                    {
                        "0" : foot_icon_0,
                        "1" : foot_icon_1,
                        "2" : foot_icon_2,
                        "3" : foot_icon_3,
                        "4" : foot_icon_4
                    }[pets[pets_idx]['water_status']]
                } />
                <img className="feed-status" src={
                    {
                        "0" : foot_icon_0,
                        "1" : foot_icon_1,
                        "2" : foot_icon_2,
                        "3" : foot_icon_3,
                        "4" : foot_icon_4
                    }[pets[pets_idx]['feed_status']]
                } />
            </div>
        )
    }

    return(
        <div className="wrap">
            <button onClick={onGotoVideo}>
                Video
            </button>

            <div className="section">
                <div className="info-container">
                    <Pet_info pets_idx={0}/>
                    <Pet_info pets_idx={1}/>
                    <Pet_info pets_idx={2}/>
                </div>
            </div>
            <div className="footer">
                <div className="time">8:17 pm<br/>2022 / 08 / 17</div>
            </div>
        </div>
    );
}

export default Home;