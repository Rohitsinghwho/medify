import React from "react";
import "./OFamilies.css";
import { FaHeartbeat } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa6";
const OFamilies = () => {
  return (
    <section className="OFamily">
      <div className="OFamilyContainer">
        <div className="OFamilyText">
          <span className="OFamilyTextOne">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</span>
          <span className="OFamilyTextTwo">Our Families</span>
          <p className="OFamilyTextThree">
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>

        <div className="OFamilyIcons">
            <div className="OFamilyIconItem">
                <div className="OFamilyIconFrame">
                  <FaHeartbeat size={60} color="#2AA7FF"/>
                </div>
                <div className="OFamilyIconText">
                    <span className="OFamilyIconTextNumber">5000+</span>
                    <span className="OFamilyIconTextDesc">Happy Patients</span>
                </div>
            </div>
            <div className="OFamilyIconItem">
                <div className="OFamilyIconFrame">
                  <FaRegHospital size={60} color="#FF684C"/>
                </div>
                <div  className="OFamilyIconText">
                    <span className="OFamilyIconTextNumber">200+</span>
                    <span className="OFamilyIconTextDesc">Hospitals</span>
                </div>
            </div>
            <div className="OFamilyIconItem">
                <div className="OFamilyIconFrame">
                  <PiTestTubeFill size={60} color="#FFB200"/>
                </div>
                <div className="OFamilyIconText">
                    <span className="OFamilyIconTextNumber">1000+</span>
                    <span className="OFamilyIconTextDesc">Laboratories</span>
                </div>
            </div>
            <div className="OFamilyIconItem">
                <div className="OFamilyIconFrame">
                  <FaHandHoldingMedical size={60} color="#4CD080"/>
                </div>
                <div className="OFamilyIconText">
                    <span className="OFamilyIconTextNumber">700+</span>
                    <span className="OFamilyIconTextDesc">Expert Doctors</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OFamilies;
