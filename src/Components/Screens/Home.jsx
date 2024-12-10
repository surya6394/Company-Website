import React from 'react'
import Navbar from '../Elements/Navbar'
import Title from '../Elements/Title'
import Services from '../Elements/Services'
import Achivement from '../Elements/Achivement'
import Testimonials from '../Elements/Testimonials'
import Footer from '../Elements/Footer'

const Home = () => {
  return (
    <>
      <div className='bg-[rgba(16,16,16,1)]'>
        <Navbar />
        <Title />
        <Services />
        <Achivement />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default Home