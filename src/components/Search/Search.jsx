import React from 'react'
import SearchImg from '../../assets/Search.png';
import './Search.css'
import { IoIosSearch } from "react-icons/io";
import { useState, useEffect } from 'react';
const Search = () => {


  return (
    <form>
        <div className='InputFields'>
        <IoIosSearch size={30} style={{width:'50px'}} color='#9CA3AF' />
        <input type="text" placeholder='State'/>
        </div>
        <div className='InputFields'>
        <IoIosSearch size={30} style={{width:'50px'}} color='#9CA3AF' />
        <input type='text' placeholder='City'/>
        </div>
        <ul className="suggestions">
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>
          <li>hey</li>

        </ul>

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