import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);


const LineChart = () => {
    const Yearly_Options = {
        maintainAspectRatio: false,
        responsive: true,
        interaction: {
            mode: "index",
            intersect: false,
        },
        legend: {
            display: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: false,
                text: "",
            },
            legend: {
                display: false, 
            },
            tooltip: {
                enabled: false,
                boxShadow: "0px 5px 15px #44444F1A",
                backgroundColor: "white",
                borderRadius: 5,
                callbacks: {
                    labelTextColor: function (context) {
                        return "#44444F";
                    },
                },
            },
        },
        scales: {
            y: {
                type: "linear",
                display: true,
                position: "left",
                grid: {
                    drawOnChartArea: false,
                },
            },
            y1: {
                type: "linear",
                display: false,
                position: "right",
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };
    const Yearly_Data = {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
            {
                label: ``,
                data: [40, 20, 60, 40, 60, 30, 80],
                borderColor: "#004D99",
                backgroundColor: "rgba(63, 154, 224, 0.10)",
                borderWidth: 3,
                yAxisID: "y",
                tension: 0.5,
                fill: 'origin',
            },
        ],
    };
    return (
        <>
            <section className='bg-white header-shadow px-14 py-7 rounded-xl mt-3 relative'>
                <p className='uppercase text-primary font-bold mt-4 text-center absolute -left-3 -rotate-90  top-1/3'>Balance</p>
                <div className='h-56'>
                    <Line options={Yearly_Options} data={Yearly_Data} />

                </div>
                <p className='uppercase text-primary font-bold mt-4 text-center'>Trades</p>
            </section>

        </>
    )
}

export default LineChart