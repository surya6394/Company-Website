import React from 'react'
import Navbar from '../Elements/Navbar'
import Title from '../Elements/Title'
import Services from '../Elements/Services'

const Home = () => {
  return (
    <>
      <div className='bg-[rgba(16,16,16,1)]'>
        <Navbar />
        <Title />
        <Services />
      </div>
    </>
  )
}

export default Home