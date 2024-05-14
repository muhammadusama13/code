import React from 'react'

const Switch = ({ className, ...props }) => {
    return (
        <>
            <div className='w-max'>
                <label className='switch_btn'>
                    <input
                        type='checkbox' className='hidden' />
                    <span className='switch_base w-11 h-[21px]'>
                        <span className='switch_cricle'></span>
                    </span>
                </label>

            </div>
        </>
    )
}

export default Switch