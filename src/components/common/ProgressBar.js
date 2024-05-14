import React from 'react'

const ProgressBar = ({ progress = '40%' }) => {
    return (
        <>
            <div className='bg-[#D9F0FF] rounded-xl overflow-hidden h-[17px]'>
                <span style={{
                    width: progress
                }} className='block bg-primary h-full rounded-xl transition-all delay-200'></span>
            </div>
        </>
    )
}

export default ProgressBar