import React, { useContext } from 'react'
import Search from '../components/Search/Search'
import HospitalContext from '../context/HospitalContext'
import { BsHospital } from "react-icons/bs";
import "./Booking.css"
const Booking = () => {

    const {bookedSlot}=useContext(HospitalContext);
  return (
     <div className="">
        <div className="AvailableMedicalCenters MBooking">
                  <h1>My Bookings</h1>
        </div>
        <div className="SearchResults">
      <div className="Searchbar">
        <Search/>
      </div>
      <div className="SearchResultContainer">
          {bookedSlot?.map((item)=>(
          <div className="SearchResultsContainer" key={item.hospitalId}>
            <div className="ResultBox">
              <div>
                <div className="HospitalLogo">
                  <BsHospital size={70} />
                </div>  
              </div>
              <div className="HosptialNameContainer">
                <h3>{item.hospitalName}</h3>
                <div className="HospitalSubheading">
                  <span className="hs1">{item.address}</span>
                  <span className="hs2">
                    Smilessence Center for Advanced Dentistry + 1
                  </span>
                  <div className="HospitalSubheading2">
                    <span className="hs21">FREE</span>
                    <span className="hs22">Consultation fee at clinic</span>
                  </div>
                </div>
              </div>
              <div className="ATimeSlot">
                    <p>{item.slot}</p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Booking