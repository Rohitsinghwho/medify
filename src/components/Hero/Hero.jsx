import React, { useContext, useEffect, useState } from "react";
import bannerDoc from "../../assets/bannerDoc.png";
import "./Hero.css";
import ButtonPrimary from "../Button/ButtonPrimary";
import { IoIosSearch } from "react-icons/io";
import { BsHospital } from "react-icons/bs";
import { ImLab } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa";
import { FaAmbulance } from "react-icons/fa";
import HospitalContext from "../../context/HospitalContext";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const {saveMedicalStores}=useContext(HospitalContext);
  const naviagte=useNavigate();


  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error(err));
  }, []);
  useEffect(() => {
    if (!selectedState) return;
    fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`)
      .then((res) => res.json())
      .then((data) => setCity(data))
      .catch((err) => console.error(err));
  }, [selectedState]);
  const handleStateSelect = (state) => {
    setSelectedState(state);
    setStateInput(state);
    console.log(state);
    setCityInput("");
  };

  const handleCitySelect = (city) => {
    setCityInput(city);
    console.log(city);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedState || !cityInput) return;
    else{
      if(saveMedicalStores(selectedState,cityInput)){
        naviagte("hospitals");
      }
    }
  };

  // Filter suggestions based on user input
  const filteredStates = states.filter((s) =>
    s.toLowerCase().includes(stateInput.toLowerCase())
  );
  const filteredCities = city.filter((c) =>
    c.toLowerCase().includes(cityInput.toLowerCase())
  );
  return (
    <section className="heroContainer">
      <div className="heroTextContainer">
        <div className="heroText">
          <span className="heroTextOne">Skip the travel! Find Online</span>
          <span className="heroTextTwo">
            Medical <span className="heroTextTwoInner">Centers</span>
          </span>
          <span className="heroTextThree">
            Connect instantly with a 24x7 specialist or choose to video visit a
            particular doctor.
          </span>
        </div>
        <ButtonPrimary btnName={"Find Centers"} />
      </div>

      <img src={bannerDoc} alt="doctors" />
      <div className="formContainer">
        <form onSubmit={handleSearch}>
          <div className="InputFields">
            <IoIosSearch size={30} style={{ width: "50px" }} color="#9CA3AF" />
            <input
              type="text"
              value={stateInput}
              placeholder="State"
              onChange={(e) => {
                setStateInput(e.target.value); 
                setSelectedState("");
                setCity([]);
              }}
            />
            {stateInput && !selectedState && (
              <div className="dropdown" id="state">
                <ul>
                {filteredStates.map((state)=>(
                  <li
                  key={state}
                  className="dropdownItem"
                  onClick={()=>handleStateSelect(state)}
                  >
                    {state}
                  </li>
                ))}
                </ul>
              </div>
            )}
          </div>
          <div className="InputFields">
            <IoIosSearch size={30} style={{ width: "50px" }} color="#9CA3AF" />

            <input
              type="text"
              disabled={!selectedState}
              placeholder="City"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            {selectedState&&filteredCities.length > 0&&(
              <div className="dropdown" id="city">
                <ul>
              {filteredCities.map((city)=>(
                <li
                key={city}
                className="dropdownItem"
                onClick={()=>handleCitySelect(city)}
                >
                  {city}
                </li>
              ))}
                </ul>
              
              </div>)}
          </div>
          <div className="Btn">
            <button type="submit" id="searchBtn">
              <IoIosSearch size={30} style={{ width: "50px" }} />
              Search
            </button>
          </div>
        </form>
        <div className="FormContainerInner">
          <span>You may be looking for</span>
          <div className="FormContainerIcons">
            <div className="itemsFormContainer">
              <FaUserDoctor size={60} color="#2AA7FF" />
              <span>Doctors</span>
            </div>
            <div className="itemsFormContainer">
              <ImLab size={60} color="#2AA7FF" />
              <span>Labs</span>
            </div>
            <div className="itemsFormContainer">
              <BsHospital size={60} color="#2AA7FF" />
              <span>Hospitals</span>
            </div>
            <div className="itemsFormContainer">
              <FaBriefcaseMedical size={60} color="#2AA7FF" />
              <span>Medical Store</span>
            </div>
            <div className="itemsFormContainer">
              <FaAmbulance size={60} color="#2AA7FF" />
              <span>Ambulance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
