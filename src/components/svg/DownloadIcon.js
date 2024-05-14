import React from 'react'

const DownloadIcon = ({ color = '#fff', width = "22", height = "22" }) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1128 14.1198L6.79653 9.8036L8.00508 8.55189L10.2495 10.7963V3.76086H11.976V10.7963L14.2205 8.55189L15.429 9.8036L11.1128 14.1198ZM5.93328 17.5728C5.4585 17.5728 5.05219 17.4039 4.71438 17.0661C4.37656 16.7283 4.20736 16.3217 4.20679 15.8463V13.2566H5.93328V15.8463H16.2923V13.2566H18.0188V15.8463C18.0188 16.3211 17.8498 16.7277 17.512 17.0661C17.1742 17.4045 16.7676 17.5734 16.2923 17.5728H5.93328Z" fill={color} />
            </svg>

        </>
    )
}

export default DownloadIcon