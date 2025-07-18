import React from 'react'

export const Button1 = ({ onclick, name}) => {
    return (
        <>
            <button type="button" className="text-btn-txtclr bg-btn-clr focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-btn-clr">
                {name}
            </button>
        </>
    )
}

export const Button2 = ({ onclick, name}) => {
    return (
        <>
            <button type="button" className="text-nav-clr focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
                {name}
            </button>
        </>
    )
}

export const Button3 = ({ onclick, name}) => {
    return (
        <>
            <button type="button" className="text-btn-txtclr bg-btn-clr focus:ring-4 focus:outline-none rounded-full w-[154px] h-[54px] text-[20px] font-[500] text-center dark:bg-btn-clr">
                {name}
            </button>
        </>
    )
}
