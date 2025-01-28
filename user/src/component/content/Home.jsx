import React from 'react'
// import LeaderBoard from './LeaderBoard'
import Hero from './Hero'
import PlantType from './PlantType'

import Testimonials from './Testimonials'
import OurImpact from './OurImpact'
import Demoo from './Demoo'
import Voluanteer from './Voluanteer'
import AboutSection from './LeaderBoard'
import InfoSection from './WhyDonate'
import ImportantLinks from './GiftorDonate'

const Home = () => {
  return (
    <div >
      <Hero/>
      <AboutSection/>
      <InfoSection/>
      <ImportantLinks/>
      {/* <StepsDonation/>
      <StepsSpent/>
      <PlantType/>
      <Voluanteer/>
      <Mission/> 
      <OurImpact/>
      <Testimonials/> */}
      {/* <Demoo age={14} name={'toshi'} pancard={false}/> */}
    </div>
  )
}
export default Home