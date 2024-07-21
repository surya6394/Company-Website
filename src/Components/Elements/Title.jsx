import React from 'react'
import { Button1, Button2 } from './CustomComponents/Button'
import { IoIosArrowDown } from "react-icons/io";

const Title = () => {
    return (
        <>
            <div className='container text-txt-clr'>
                <div className='w-[1150px] mx-auto py-16'>
                    <div className='w-[908px] mx-auto'>
                        <h1 className='text-center text-[56px] font-[700] leading-[88px] tracking-wider'>We Design And Develop Digital Products</h1>
                    </div>
                    <div className='text-center mt-5'>
                        <p className='text-[18px] font-[300] leading-[36px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy text ever since the 1500s, took a galley of type and scrambled it to make a type specimen book.</p>
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