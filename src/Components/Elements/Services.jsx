import React from 'react'
import { Button2 } from './CustomComponents/Button'
import { CgArrowLongRight } from "react-icons/cg";

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
                </div>
            </div>
        </>
    )
}

export default Services