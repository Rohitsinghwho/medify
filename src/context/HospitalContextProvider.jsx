import React, { useEffect, useState } from 'react'
import HospitalContext from './HospitalContext.js'

const HospitalContextProvider = ({children}) => {
  const [medicalCenters,setMedicalCenters]=useState([]);
  const [bookedSlot,setBookedSlot]=useState([]);
  const [selectedState,setSelectedState]=useState('');

  const SaveSlotsToLocalStorage=(booking)=>{
    setBookedSlot((prev) => {
      const updated = [...prev, booking];
      localStorage.setItem("bookings", JSON.stringify(updated));
      return updated;
    });
  }
  
  const getBookingSlots=()=>{
    const stored=localStorage.getItem("bookings");
    if(stored){
        setBookedSlot(JSON.parse(stored));
      }
  }
  const saveMedicalStores=async(state,city)=>{
    try {
      const response=await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
      if(!response.ok)return;
      else{
        const data=await response.json();
        console.log(data);
        setSelectedState(city.trim().toLowerCase());
        setMedicalCenters(data);
        return true;
      }
    } catch (error) {
        console.log(error)
        return false;
    }
  }
  useEffect(()=>{
    getBookingSlots();
  },[]);
  return (
    <HospitalContext.Provider value={{saveMedicalStores,medicalCenters,SaveSlotsToLocalStorage,bookedSlot,selectedState}}>
      {children}
    </HospitalContext.Provider>
  )
}

export default HospitalContextProvider