import React from 'react'
import GaugeProgress from './GaugeProgress'

const SummaryTable = () => {
    return (
        <>
            <table className='table w-full '>
                <thead>
                    <tr>
                        <td className='text-[13px] font-bold border-b py-1'>Date</td>
                        <td className='text-[13px] font-bold border-b py-1'>Trades</td>
                        <td className='text-[13px] font-bold border-b py-1'>Lots</td>
                        <td className='text-[13px] font-bold border-b py-1'>Max Daily Loss</td>
                        <td className='text-[13px] font-bold border-b py-1'>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {[0, 1, 2,3]?.map((item, index) => <tr className='app-text-color font-semibold'>
                        <td className='text-[13px] border-b py-2.5'>12 March</td>
                        <td className='text-[13px] border-b py-2.5'>2</td>
                        <td className='text-[13px] border-b py-2.5'>14.88</td>
                        <td className='text-[13px] border-b py-2.5'>
                            <div className='h-10 w-20'>
                                <GaugeProgress />
                            </div>
                        </td>
                        <td className='text-[13px] border-b py-2.5 text-red-500'>-$130</td>

                    </tr>
                    )}

                </tbody>
            </table>
            {/*  */}
        </>
    )
}

export default SummaryTable