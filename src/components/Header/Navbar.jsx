import React, { useEffect, useState } from 'react'
import './Navbar.css'
import ButtonPrimary from "../Button/ButtonPrimary"
import logo from "../../assets/verified.png";
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle,setToogle]=useState(false);
  const [isMobile,setIsMobile]=useState(window.innerWidth<=768);
  useEffect(()=>{
    const handleResize=()=>setIsMobile(window.innerWidth<=768);
    window.addEventListener("resize",handleResize);
    return ()=>window.removeEventListener("resize",handleResize);
  },[])
  const navItems=[
    "Find Doctors",
    "Hospitals",
    "Medicines",
    "Surgeries",
    "Softwere for Provider",
    "Faciliites"
  ]

  return (
    <nav className='navContainer'>
      <div className='logoContainerOutside'>
        <div className='logoContainer'>
        <img src={logo} alt="logo" />
        <span>Medify</span>
        </div>
        <div className='hamburger' onClick={()=>setToogle(prev=>!prev)}>
          {toggle?"✖":"☰"}
        </div>
      </div>
      {
        !isMobile&&(
          <div className='navItemsContainer'>
            {navItems.map((item)=>(
              <span  className='navItems' key={item}>{item}</span>  
            ))}
            <ButtonPrimary btnName={"My Bookings"}/>
          </div>
        )
      }

        {isMobile&&toggle&&(
      <div className='navItemsContainerMobile'>
            {navItems.map((item)=>(
             <span className='navItemsMobile' key={item}>{item}</span>  
        ))}
        <ButtonPrimary btnName={"My Bookings"}/>
      </div>
        )}
  
    </nav>
  )
}

export default Navbar