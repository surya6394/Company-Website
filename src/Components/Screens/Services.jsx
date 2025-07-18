import React from 'react'
import Testimonials from '../Elements/Testimonials'
import Service from '../Elements/Service'

const Services = () => {
    return (
        <>
            <div className='bg-[rgba(16,16,16,1)] pt-[90px]'>
                <div className='container mx-auto pb-[140px]'>
                    <Service />
                    <Testimonials />
                </div>
            </div>
        </>
    )
}

export default Services