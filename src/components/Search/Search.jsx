import React, { useContext } from 'react'

import './Search.css'
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from 'react';
import HospitalContext from '../../context/HospitalContext';
import { useNavigate } from 'react-router-dom';
const Search = () => {
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const [city, setCity] = useState([]);
  const {saveMedicalStores}=useContext(HospitalContext)
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
      saveMedicalStores(selectedState,cityInput)
    }
  };
  const filteredStates = states.filter((s) =>
    s.toLowerCase().includes(stateInput.toLowerCase())
  );
  const filteredCities = city.filter((c) =>
    c.toLowerCase().includes(cityInput.toLowerCase())
  );
  return (
    <form className='InputFormContainer' onSubmit={handleSearch}>
        <div className='InputFields' id="state">
        <IoIosSearch size={30} style={{width:'50px'}} color='#9CA3AF' />
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
              <div className="dropdown" >
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
        <div className='InputFields' id="city">
        <IoIosSearch size={30} style={{width:'50px'}} color='#9CA3AF' />
        <input
              type="text"
              disabled={!selectedState}
              placeholder="City"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
            />
            {selectedState&&filteredCities.length > 0&&(
              <div className="dropdown" >
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

        <div className='Btn'>
        <button type='submit' id='searchBtn' >
            <IoIosSearch size={30} style={{width:'50px'}}/>
            Search
        </button>
        </div>
    </form>
  )
}

export default Search