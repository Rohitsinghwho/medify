import React, { useContext, useState } from "react";
import Search from "../components/Search/Search";
import { BsHospital } from "react-icons/bs";
import { CiCircleChevRight } from "react-icons/ci";
import HospitalContext from "../context/HospitalContext";
import "../components/Search/Search.css"


const HospitalListing = () => {
  const [showTiming, setShowingTiming] = useState(false );
  const {medicalCenters,selectedState,SaveSlotsToLocalStorage}=useContext(HospitalContext);
  const length=medicalCenters?medicalCenters.length:0;
  const handleDate=(hospital,slot)=>{
    const booking={
      hospitalId:hospital["Provider ID"],
      "Hospital Name":hospital["Hospital Name"],
      address:hospital.Address,
      state:selectedState,
      slot:slot,
      bookedAt:new Date().toISOString()
    }
     SaveSlotsToLocalStorage(booking);
     setTimeout(() => {
      alert("Your booking have been made");
     }, 1000); 
  }
  return (
    <div className="">
      <div className="Searchbar">
        <Search />
      </div>
      <div className="SearchResultContainer">
        <div className="AvailableMedicalCenters">
          <h1>{length} medical centers available in {selectedState}</h1>
          <div className="WaitTime">
            <CiCircleChevRight size={20} />
            <span>
              Book appointments with minimum wait-time & verified doctor details
            </span>
          </div>
        </div>

        <div className="SearchResults">
          {medicalCenters?.map((item,idx)=>(
          <div className="SearchResultsContainer" key={idx}>
            <div className="ResultBox">
              <div>
                <div className="HospitalLogo">
                  <BsHospital size={70} />
                </div>
              </div>
              <div className="HosptialNameContainer">
                <h3>{item["Hospital Name"]}</h3>
                <div className="HospitalSubheading">
                  <span className="hs1">{item.Address}</span>
                  <span className="hs2">
                    Smilessence Center for Advanced Dentistry + 1
                  </span>
                  <div className="HospitalSubheading2">
                    <span className="hs21">FREE</span>
                    <span className="hs22">Consultation fee at clinic</span>
                  </div>
                </div>
              </div>
              <div className="CenterVisit">
                <div className="CenterVisitIn">
                  <p>Available Today</p>
                  <button onClick={() => setShowingTiming(!showTiming)}>
                    Book FREE Center Visit
                  </button>
                </div>
              </div>
            </div>
            {showTiming && (
              <div className="SecondS" >
                <div className="DayContainer">
                  <div className="DayTime">
                    <p className="Day">Today</p>
                    <p className="noSlot">11 Slots Available</p>
                  </div>
                  <div className="DayTime">
                    <p className="Day">Tommorrow</p>
                    <p className="noSlot">11 Slots Available</p>
                  </div>
                  <div className="DayTime">
                    <p className="Day">Fri, 5 May</p>
                    <p className="noSlot">11 Slots Available</p>
                  </div>
                </div>  
                <div className="timingContainer">
                  <p>Morning</p>
                  <div className="timeContainer">
                  {["8:30 AM", "9:00 AM", "10:30 PM"].map((time)=>(
                      <button className="time" key={time}  onClick={()=>handleDate(item,time)}>{time}</button>
                    ))}
                  </div>
                </div>
                <div className="timingContainer">
                  <p>Afternoon</p>
                  <div className="timeContainer">
                    {["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM"].map((time)=>(
                      <button className="time" key={time}  onClick={()=>handleDate(item,time)}>{time}</button>
                    ))}
                  </div>
                </div>
                <div className="timingContainer">
                    <p>Evening</p>
                  <div className="timeContainer">
                    {["3:30 AM", "4:00 PM", "5:30 PM"].map((time)=>(
                      <button className="time" key={time}  onClick={()=>handleDate(item,time)}>{time}</button>
                    ))}
                   
                  
                  </div>
                </div>
              </div>
            )}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HospitalListing;
