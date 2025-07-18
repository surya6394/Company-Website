import React from 'react'
import Title from '../Elements/Title'
import Services from '../Elements/Service'
import Achivement from '../Elements/Achivement'
import Testimonials from '../Elements/Testimonials'
import Projects from '../Elements/Projects'

const Home = () => {
  return (
    <>
      <div className='bg-[rgba(16,16,16,1)]'>
        <Title />
        <Services />
        <Projects />
        <Achivement />
        <Testimonials />
      </div>
    </>
  )
}

export default Home