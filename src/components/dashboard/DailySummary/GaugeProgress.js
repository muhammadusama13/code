import React from 'react'
import GaugeChart from 'react-gauge-chart'

const GaugeProgress = () => {
    return (
        <>
            <div>
                <GaugeChart
                    id="gauge-chart1"
                    nrOfLevels={3}
                    colors={["#D9F0FF", '#b1dfff', "#004D99"]}
                    arcWidth={0.2}
                    percent={60 / 100}
                    cornerRadius={1}
                    needleColor={'#004D99'}
                    needleBaseColor={'#004D99'}
                    hideText={true}
                    arcPadding={0}
                    needleScale={0.7}
                />
            </div>
        </>
    )
}

export default GaugeProgress