import React from "react";
import "./PCaring.css";
import tick from "../../assets/tickcolored.png";
import { FaPhone } from "react-icons/fa";
import doctor1 from "../../assets/doctor1.png";
import doctor2 from "../../assets/doctor2.png"
const PCaring = () => {
  return (
    <section className="PCaringMain">
      <div className="PCaring">
        <div className="PCaringImageTextContainer">
        <div className="PCaringImageText">
          <div className="PCaringImageContainer">
            <div className="PCaringPhoneImage">
              <FaPhone size={20} color="white"/>
            </div>
            <span className="PCaringImageTOne">Free Consultation</span>
          </div>
          <span className="PCaringImageTTwo">Consultation with the best</span>
        </div>

        <img className="PCaringImageOne" src={doctor1} alt="" />
        <img className="PCaringImageTwo" src={doctor2} alt="" />
        </div>

        <div className="PCaringText">
          <span className="PCaringT">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </span>
          <span className="PCaringD">
            Patient <span>Caring</span>
          </span>
          <p className="PCaringPara">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div className="PCaringOptions">
            <div className="PCaringOp">
              <img src={tick} alt="" />
              <span>Stay Updated About Your Health</span>
            </div>
            <div className="PCaringOp">
              <img src={tick} alt="" />
              <span>Check Your Results Online</span>
            </div>
            <div className="PCaringOp">
              <img src={tick} alt="" />
              <span>Manage Your Appointments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PCaring;
