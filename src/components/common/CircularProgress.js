import React from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const CircularProgress = ({ children, strokeWidth = 10 }) => {
    return (
        <>
            <CircularProgressbarWithChildren
                strokeWidth={strokeWidth}
                trailWidth={5}
                value={66}
                styles={buildStyles({
                    pathColor: `rgba(1, 54, 89, 1)`,
                    trailColor: '#B1DFFF',
                })}
            >
                {children}
            </CircularProgressbarWithChildren>
        </>
    )
}

export default CircularProgress