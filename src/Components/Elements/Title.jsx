import React from 'react'
import { Button1, Button2 } from './CustomComponents/Button'
import { IoIosArrowDown } from "react-icons/io";

const Title = () => {
    return (
        <>
            <div className='container mx-auto text-txt-clr'>
                <div className='w-[1150px] mx-auto py-16'>
                    <div className='w-[908px] mx-auto'>
                        <h1 className='text-center text-[56px] font-[700] leading-[80px] tracking-wider'>We Design And Develop Digital Products</h1>
                    </div>
                    <div className='text-center mt-6'>
                        <p className='text-[18px] font-[300] leading-[34px] '>At our company, we transform ideas into functional and visually captivating digital products. Our expertise spans web and mobile app development, user-centric design, and seamless integrations to help businesses succeed in the digital age.</p>
                    </div>
                    <div className='flex justify-center mt-5'>
                        <Button1 name='About Us' />
                        <Button2 name='Book A Call' />
                    </div>
                    <div className='flex justify-center items-center mt-16'>
                        <button>
                            <IoIosArrowDown className='bg-btn-clr w-10 h-10 p-2 rounded-full text-[#000000]' />
                        </button>
                    </div>
                </div>

                <div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title