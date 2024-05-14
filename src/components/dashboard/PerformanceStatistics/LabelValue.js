import React from 'react'

const LabelValue = ({ label, value }) => {
    return (
        <div className='text-xs font-semibold border rounded border-dashed py-1 px-2'>
            <p>{label}</p>
            <span className='app-text-color'>{value}</span>
        </div>
    )
}

export default LabelValue