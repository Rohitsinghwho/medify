import React from 'react'
import "./FAQ.css"
import AccordionComponent from "../Accordion/AccordionComponent" 
import Doc from "../../assets/doctor1.png"
const FAQ = () => {
  return (
    <section className='FMain'>
        <div className='FContainer'>
            <div className='FContainerHeading'>
                <span className='FContainerHeadingOne'>Get Your Answer</span>
                <span className='FContainerHeadingTwo'>Frequently Asked Questions</span>
            </div>

            <div className='FContainerItems'>
                <div className='FContainerImageDiv'>
                     <img src={Doc} alt="" />
                </div>

                <div className='FContainerAccordDiv'>
                    <AccordionComponent/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ