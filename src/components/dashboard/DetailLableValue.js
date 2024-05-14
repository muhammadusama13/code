import React from 'react'

const DetailLableValue = ({ lable, value }) => {
    return (
        <>

            <div className='flex border-b py-2.5'>
                <p className='text-[13px] app-text-color flex-1'>{lable}</p>
                <span className='text-[13px] app-text-color flex-1'>{value}</span>
            </div>
        </>
    )
}

export default DetailLableValue