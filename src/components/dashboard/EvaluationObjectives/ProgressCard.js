import React from 'react'
import CardHeader from './CardHeader'
import ProgressBar from '../../common/ProgressBar'

const ProgressCard = () => {
    return (
        <>
            <div className='header-shadow bg-white rounded-xl col-span-2'>
                <CardHeader title={'Virtual Daily Loss'} />
                <div className='text-center mt-3'>
                    <span className='text-primary text-[13px] font-semibold'>$50,000.00</span>
                    <div className='w-[80%] mx-auto mt-2'>
                        <ProgressBar  progress='40%'/>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <p className='app-text-color text-xs'>Rule Breach Level Today: </p>
                    <span className='app-text-color text-xs'>$48,000.00</span>
                </div>
            </div>
        </>
    )
}

export default ProgressCard