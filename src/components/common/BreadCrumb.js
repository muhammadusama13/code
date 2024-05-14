import React from 'react'
import HomeIcon from '../svg/HomeIcon'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ icon, list = [] }) => {
    return (
        <>
            <div className='flex items-center gap-x-2'>
                <span><HomeIcon color='#004D99' /></span>
                <div className='flex items-center gap-x-2'>
                    {list?.map((item, index) => <div
                        className='flex gap-x-1 text-[15px] font-bold app-text-color'
                        key={index}>
                        <Link to={item.path} className=''>{item?.name}</Link>
                        <p>/</p>
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default BreadCrumb