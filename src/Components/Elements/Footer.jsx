import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='conatiner bg-[#1A1A1A] h-[432px]'>
                <div className='w-[1069px] mx-auto pt-[60px] flex'>
                    <div className='w-1/2'>
                        <h2 className='text-[22px] font-[400] text-[#FFFFFF] mb-5'>Ready to get started?</h2>
                        <button type="button" className="text-btn-txtclr bg-btn-clr focus:ring-4 focus:outline-none rounded-[170px] w-[175px] h-[50px] text-[17px] font-[700] text-center dark:bg-btn-clr">
                            Contact US
                        </button>
                    </div>
                    <div className='flex ml-20 gap-[150px]'>
                        <div>
                            <h2 className='text-[20px] font-[500] text-[#00B20E]'>Navigation</h2>
                            <ul className='leading-[35px] text-[16px] font-[400] text-[#FFFFFF] mt-3'>
                                <li>Home</li>
                                <li>Our Services</li>
                                <li>Portfolios</li>
                                <li>About Us</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className='text-[20px] font-[500] text-[#00B20E]'>Contact</h2>
                            <ul className='leading-[35px] text-[16px] font-[400] text-[#FFFFFF] mt-3'>
                                <li>+91 9876543212</li>
                                <li>Surya@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between w-[1069px] mx-auto py-[60px]'>
                    <div className='flex gap-10 text-[16px] font-[400] text-[#FFFFFF]'>
                        <h2>Terms & Conditions</h2>
                        <h2>Privacy Policy</h2>
                    </div>
                    <div className='flex gap-7 text-[#FFFFFF]'>
                        <FaFacebookF size={20} />
                        <FaLinkedinIn size={20} />
                        <FaInstagram size={20} />
                        <FaTwitter size={20} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer