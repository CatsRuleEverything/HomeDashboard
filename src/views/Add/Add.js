/* eslint-disable */
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Add.css"
import "../../../resources/css/style.css"
import completeBtn from "../../../resources/home_assets/complete.png";
import cancelBtn from "../../../resources/home_assets/cancel.png";
import addPicBtn from "../../../resources/home_assets/add_pet_circle.png";

// 동물 정보 입력칸
import name from "../../../resources/home_assets/add_pet_name.png";
import kind from "../../../resources/home_assets/add_pet_kind.png";
import gender from "../../../resources/home_assets/add_pet_S.png";
import age from "../../../resources/home_assets/add_pet_age.png";
import weight from "../../../resources/home_assets/add_pet_weight.png";



const Video = () => {
    //let [popup, setPopup] = useState(false); // 나중에 팝업창도 넣으면 좋을듯

    const history = useHistory();

    const onGotoHome = () => {

        history.push("/");
    };

    const [info, setInfo] = useState({name:"", kind:"", gender:"", age:"", weight:""})

    return(
        <div className="wrap">
            <div className="add-top-section">
                <div className="add-title">반려동물 추가</div>
                <div className="add-button-container">
                    <img src={cancelBtn} className="cancel-button" onClick={onGotoHome}/>
                    <img src={completeBtn} className="complete-button" onClick={onGotoHome}/>
                </div>
            </div>
            <div className="add-content-section">
                <div className="add-picture"> {/*이거 클릭하면 사진 선택창..*/}
                    <img src={addPicBtn} width="380vw" height="380vh"/>
                </div>
                <div className="add-info">
                    <div className="name">
                        <img className="name-img" src={name} width="370vw" height="44vh"/>
                        <input className = "name-input"></input>  
                    </div>
                    <div className="kind">
                        <img className="kind-img" src={kind} width="370vw" height="44vh"/>
                        <input className = "kind-input"></input>  
                    </div>
                    <div className="gender">
                        <img src={gender} width="370vw" height="44vh"/>
                        <input className = "gender-input"></input>  
                    </div>
                    <div className="age">
                        <img src={age} width="370vw" height="44vh"/>
                        <input className = "age-input"></input>  
                    </div>
                    <div className="weight">
                        <img src={weight} width="370vw" height="44vh"/>
                        <input className = "weight-input"></input>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;