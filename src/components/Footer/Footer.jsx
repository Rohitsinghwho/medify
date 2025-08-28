import React from "react";
import "./Footer.css";
import twitter from "../../assets/twitter.png";
import pintrest from "../../assets/pintrest.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import logo from "../../assets/verified.png";
import { MdKeyboardArrowRight } from "react-icons/md";

  const Footer = () => {
  return (
    <footer>
      <div className="FoContainer">
    <div className="FContainerLinks">
        <div className="FContainerLogoImg">
             <div className='logoContainer'>
                    <img src={logo} alt="logo" />
                    <span>Medify</span>
              </div>
              <div className="FContainerLinksLogoImg">
                  <img src={twitter} alt="twitter" />
                  <img src={pintrest} alt="pintrest" />
                  <img src={facebook} alt="facebook" />
                  <img src={youtube} alt="youtube" />
              </div>
        </div>
        <div className="FContainerLinksItems">
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>About Us</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight  size={20} color="#FFFFFF"/>
            <span>Our Pricing</span>
          </span>
          <span  className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Our Gallery</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Appointment</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Privacy Policy</span>
          </span>
        </div>
        <div className="FContainerLinksItems">
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Orthology</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Neurology</span>
          </span>
          <span  className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Dental Care</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Opthalmology</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Cardiology  </span>
          </span>
        </div>
        <div className="FContainerLinksItems">
           <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>About Us</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight  size={20} color="#FFFFFF"/>
            <span>Our Pricing</span>
          </span>
          <span  className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Our Gallery</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Appointment</span>
          </span>
          <span className="FContainerLinksItem">
            <MdKeyboardArrowRight size={20} color="#FFFFFF"/>
            <span>Privacy Policy</span>
          </span>
        </div>
      </div>
      <hr />
      <div className="FContainerText">
        <span>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</span>
        </div>  
      </div>
    </footer>
  );
};

export default Footer;
