import React from 'react'

const Heading = ({ title, className = 'text-[22px]' }) => {
    return (
        <h1 className={`${className} font-bold`}>{title}</h1>
    )
}

export default Heading