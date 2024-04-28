import React from "react";


const backdrop = {
    visible: {
        opacity: 1
    },
    hidden: {opacity: 0}
}
export const BlurModal = ({showModal, children, onClick}) => {

    return (
        <div
            onClick={onClick}
            // className ={'fixed top-0 left-0 right-0 bottom-0 z-50 w-full p-4 overflow-x-hidden backdrop-blur-3xl overflow-y-auto md:inset-0 h-full max-h-full'}>
            className={'fixed py-[4.8rem] px-[1.2rem] cursor-pointer top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden backdrop-blur-[12px] overflow-y-auto md:inset-0 h-screen flex justify-content-center'}>
            <div className={'bg-none border-none font-medium absolute top-[1.2rem] right-[1.2rem] cursor-pointer'}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                     width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
            </div>
            {/*<div className={'relative w-full max-w-xl max-h-full m-auto'}>*/}
            <div className={'w-full max-w-2xl h-fit overflow-hidden m-auto'}>
                {children}
            </div>
        </div>
    )
}
