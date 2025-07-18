import React from 'react'
import { Button3 } from '../Elements/CustomComponents/Button';
import Img from '../Images/aboutImg.png'
import Testimonials from '../Elements/Testimonials';
import Achivement from '../Elements/Achivement';

const About = () => {
    return (
        <>
            <div className='bg-[rgba(16,16,16,1)] pt-[90px]'>
                <div className='container mx-auto pb-[140px]'>
                    <div className='flex w-[1240px] mx-auto gap-[84px]'>
                        <div className='w-1/2 pt-[35px]'>
                            <h1 className='text-[56px] font-[700] leading-[68px] pb-[16px] text-txt-clr'>Innovate. Design. Inspire</h1>
                            <div className='flex items-center text-[18px] text-[#FFFFFF] font-[500] w-[629px] opacity-[80%] leading-[36px]'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, took a galley of type and scrambled it to make a type specimen book. Lorem has been the industry's standard scrambled it to make a type specimen book.</p>
                            </div>
                            <div className='mt-[16px]'>
                                <Button3 name="Book A Call" />
                            </div>
                        </div>
                        <div>
                            <img src={Img} alt="No Image" />
                        </div>
                    </div>
                </div>
                <Achivement />
                <Testimonials />
            </div>
        </>
    )
}

export default About