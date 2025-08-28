import React from 'react'
import Hero from '../components/Hero/Hero'
import Carousel from '../components/Carousel/Carousel'
import Specialisation from '../components/Spec/Specialisation'
import MSpecialist from '../components/MedicalSpecialist/MSpecialist'
import PCaring from '../components/PatientCaring/PCaring'
import Blog from '../components/Blog/Blog'
import OFamilies from '../components/OurFamilies/OFamilies'
import FAQ from '../components/FAQs/FAQ'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Carousel/>
        <Specialisation/>
        <MSpecialist/>
        <PCaring/>
        <Blog/>
        <OFamilies/>
        <FAQ/>
    </div>
  )
}

export default HomePage