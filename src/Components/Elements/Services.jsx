import React from 'react'
import { Button2 } from './CustomComponents/Button'
import { CgArrowLongRight } from "react-icons/cg";
import img1 from '../Images/img1.jpeg'

const Services = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='w-[1240px] mx-auto'>
                    <div className='flex justify-between'>
                        <div className='w-[558px]'>
                            <h3 className='text-[16px] text-txt-clr2'>Our Services</h3>
                            <h1 className='text-[36px] font-[700] text-txt-clr'>Service We Provide To Our Clients</h1>
                        </div>
                        <div className='flex items-end'>
                            <div className='flex items-center text-txt-clr2'>
                                <Button2 name="Explore" /><CgArrowLongRight />
                            </div>
                        </div>
                    </div>

                    <div className='mt-20'>
                        <div className='w-[558px] mb-[76px]'>
                            <h3 className='text-[16px] text-txt-clr2'>Our Portfolio</h3>
                            <h1 className='text-[36px] font-[700] text-txt-clr'>What We Did For Our Past Clients</h1>
                        </div>

                        <div className='flex justify-center gap-[26px] pb-[140px]'>
                            <div className='flex'>
                                <img src={img1} className='w-[558px] h-[598px] object-cover rounded-b-[16px]' alt="Image is not available." />
                                <button className='absolute text-[16px] font-[600] mt-[32px] ml-[386px] bg-txt-clr2 w-[172px] h-[48px] rounded-bl-[30px] rounded-tl-[2px]'>Web Design</button>
                            </div>
                            <div className=''>
                                <div className='flex'>
                                    <img src={img1} className='w-[656px] h-[286px] object-cover rounded-b-[16px] mb-6' alt="Image is not available." />
                                    <button className='absolute text-[16px] font-[600] mt-[32px] ml-[484px] bg-txt-clr2 w-[172px] h-[48px] rounded-bl-[30px] rounded-tl-[2px]'>Web Design</button>
                                </div>
                                <div className='flex'>
                                    <img src={img1} className='w-[656px] h-[286px] object-cover rounded-b-[16px]' alt="Image is not available." />
                                    <button className='absolute text-[16px] font-[600] mt-[32px] ml-[484px] bg-txt-clr2 w-[172px] h-[48px] rounded-bl-[30px] rounded-tl-[2px]'>Web Design</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services