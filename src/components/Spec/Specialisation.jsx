import React from 'react'
import "./Specialisation.css"
import { BsHospital } from "react-icons/bs";
import { FaStethoscope } from "react-icons/fa";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { PiTestTubeFill } from "react-icons/pi";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa6";
import { FaXRay } from "react-icons/fa";
import ButtonPrimary from "../Button/ButtonPrimary"
const Specialisation = () => {
  return (
    <section className='Spec'>
        <h2>Find by specialisation</h2>
        <div className='Sp'>
            <div className="SpItems">
                 <BsHospital  size={60} color='#2AA7FF'/>
                <span>Dentistry</span>
            </div>
            <div className="SpItems">
                <FaStethoscope size={60} color='#2AA7FF' />
                <span>Primary Care</span>
            </div>
            <div className="SpItems">
                <FaHeartbeat size={60} color='#2AA7FF'/>
                <span>Cardiology</span>
            </div>
            <div className="SpItems">
                <TbHeartRateMonitor size={60} color='#2AA7FF'/>
                <span>MRI Resonance</span>
            </div>
            <div className="SpItems">
                <PiTestTubeFill size={60} color='#2AA7FF'/>
                <span>Blood Test</span>
            </div>
            <div className="SpItems">
                <FaHandHoldingMedical size={60} color='#2AA7FF'/>

                <span>Piscologiest</span>
            </div>
            <div className="SpItems">
                <FaRegHospital size={60} color='#2AA7FF'/>

                <span>Laboratory</span>
            </div>
            <div className="SpItems">
                <FaXRay size={60} color='#2AA7FF'/>

                <span>X-Ray</span>
            </div>
        </div>
        <ButtonPrimary btnName={"View All"}/>
    </section>
  )
}

export default Specialisation