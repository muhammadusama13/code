import React from 'react'

const HomeIcon = ({ color = '#fff', width = "20", height = "19" }) => {
    return (
        <>
            <svg width="20" height="19" viewBox="0 0 20 19" fill='none' xmlns="http://www.w3.org/2000/svg">
                <path d="M7.76204 2.35368L3.57443 5.61676C2.8752 6.16061 2.30804 7.31822 2.30804 8.19615V13.9531C2.30804 15.7556 3.77643 17.2318 5.57889 17.2318H14.5757C16.3781 17.2318 17.8465 15.7556 17.8465 13.9609V8.30492C17.8465 7.36484 17.2172 6.16061 16.448 5.62453L11.6467 2.26045C10.559 1.49907 8.81089 1.53792 7.76204 2.35368Z" stroke={color} strokeWidth="1.0359" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.0773 14.1251V11.7944" stroke={color} strokeWidth="1.24984" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </>
    )
}

export default HomeIcon