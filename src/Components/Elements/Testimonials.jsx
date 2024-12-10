import React from 'react'
import Img from '../Images/img1.jpeg'
import { MdMail } from "react-icons/md";
import { Button1, Button3 } from './CustomComponents/Button';

const Testimonials = () => {

    const data = [
        {
            img: Img,
            name: 'Surya Pratap',
            designation: "Co-Founder & CEO",
            message: "Lorem Ipsum simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            rating: "4",
        },
        {
            img: Img,
            name: 'Surya Pratap',
            designation: "Co-Founder & CEO",
            message: "Lorem Ipsum simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            rating: "4",
        },
        {
            img: Img,
            name: 'Surya Pratap',
            designation: "Co-Founder & CEO",
            message: "Lorem Ipsum simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            rating: "4",
        }
    ]

    return (
        <>
            <div className='container mx-auto '>
                <div className='w-[1240px] mx-auto pb-[140px]'>
                    <div className='flex gap-[50px]'>
                        <div className='w-[558px]'>
                            <h3 className='text-[16px] text-txt-clr2'>Testimonials</h3>
                            <h1 className='text-[36px] font-[700] text-txt-clr'>What Our Customers Are Saying About Us?</h1>
                        </div>
                    </div>

                    <div className='flex mt-[76px] gap-[26px]'>
                        {data?.map((item, index) => (
                            <div key={index} className='w-[397px] h-[410px] p-[26px] bg-[#1A1A1A] text-[#FFFFFF] rounded-[16px]'>
                                <div className='flex gap-[18px]'>
                                    <img src={item?.img} alt="No Img.." className='w-[66px] h-[66px] rounded-[6px]' />
                                    <div>
                                        <h2 className='text-[20px] font-[700]'>{item?.name}</h2>
                                        <p className='text-[16px] font-[400]'>{item?.designation}</p>
                                    </div>
                                </div>
                                <div className='mt-[25px]'>
                                    <p className='text-[18px] font-[500] leading-[28px]'>{item?.message} </p>
                                </div>
                                <div class="flex items-center mt-[28px] gap-[6px]">
                                    <button type="button" class="size-9 inline-flex justify-center items-center text-2xl rounded-full text-[#00B20E] disabled:opacity-50 disabled:pointer-events-none">
                                        <svg class="shrink-0 size-9" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" class="size-9 inline-flex justify-center items-center text-2xl rounded-full text-[#00B20E] disabled:opacity-50 disabled:pointer-events-none">
                                        <svg class="shrink-0 size-9" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" class="size-9 inline-flex justify-center items-center text-2xl rounded-full text-[#00B20E] disabled:opacity-50 disabled:pointer-events-none">
                                        <svg class="shrink-0 size-9" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </button>
                                    <button type="button" class="size-9 inline-flex justify-center items-center text-2xl rounded-full text-[#00B20E] disabled:opacity-50 disabled:pointer-events-none">
                                        <svg class="shrink-0 size-9" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </button>
                                    {/* <button type="button" class="size-9 inline-flex justify-center items-center text-2xl rounded-full text-gray-300 hover:text-[#00B20E] disabled:opacity-50 disabled:pointer-events-none">
                                    <svg class="shrink-0 size-9" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                    </svg>
                                </button> */}
                                    <div className='w-[30px] h-[30px] pl-[16px]'>
                                        <h3 className='text-[22px] font-[500]'>({item?.rating})</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='pb-[140px]'>
                    <div className='w-[804px] mx-auto leading-[53.67px]'>
                        <h1 className='text-[44px] font-[500] text-[#FFFFFF] px-16 text-center'>Have an Awesome Project Idea? <span className='text-[]'>Let’s Discuss</span></h1>
                    </div>
                    <div className='flex justify-center items-center mt-[40px]'>
                        <div className='absolute w-[54px] h-[46px] mr-[580px] rounded-[50px] flex justify-center items-center bg-[#FFFFFF]'>
                            <MdMail className='text-[#00B20E]' size={30} />
                        </div>
                        <input className='w-[650px] h-[68px] pl-20 rounded-[50px] border border-[#FFFFFF] border-opacity-[20%] mx-auto bg-[rgba(16,16,16,1)]'
                            placeholder='Enter Email Address'
                            type="text" />
                        <div className='absolute ml-[480px]'>
                            <Button3 name='Send' />
                        </div>
                    </div>
                    <div className='w-[600px] mt-2 mx-auto flex justify-between text-[#00B20E] '>
                        <h2>4.5/5 Average Ratings</h2>
                        <h2>5+ Winning Awards</h2>
                        <h2>Certified Product Designer</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials