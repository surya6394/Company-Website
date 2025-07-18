import React from 'react'
import { Button2 } from './CustomComponents/Button'
import { CgArrowLongRight } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";

const Service = () => {

    const serviceList = [
        {
            name: 'Web Application Developement',
            details: ['Dynamic Web Applications', 'Responsive Web Design',  'Secure Data Management']
        },
        {
            name: 'CMS Developement',
            details: ['Custom CMS Solutions', 'Scalable Content Systems']
        },
        {
            name: 'App Developement',
            details: ['Intuitive Mobile Applications', 'Cross-Platform Compatibility']
        },
        {
            name: 'CRM Developement',
            details: ['Custom CRM Solutions', 'Workflow Optimization']
        },
        {
            name: 'Website Designing',
            details: ['Responsive Web Design', 'Modern, SEO-Friendly Designs', 'Fully Responsive Layouts']
        },
        {
            name: 'Graphics Designing',
            details: ['Creative Visual Designs', 'Logos and Infographics']
        },
    ]

    return (
        <>
            <div className='container mx-auto'>
                <div className='w-[1240px] mx-auto pb-[140px]'>
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
                    <div className='grid grid-cols-3 gap-10 mt-20'>
                        {serviceList?.map((item, index) => (
                            <div key={index} className='w-[396px] h-[230px] border-[1.5px] py-[21px] px-[29px] border-[#00B20E] rounded-[16px]'>
                                <h1 className='text-[22px] text-txt-clr font-[600]'>{item?.name}</h1>
                                <div className='mt-[18px]'>
                                    {item?.details?.map((list, index) => (
                                        <ul key={index} >
                                            <li className='flex text-txt-clr text-opacity-[60%] items-center gap-5 pb-5 text-[16px] font-[500]'><FaRegCheckCircle size={23} className='text-[#00B20E]' />{list}</li>
                                        </ul>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service