import React from 'react'
import Heading from '../../common/Heading'
import CardHeader from './CardHeader'
import ProgressCard from './ProgressCard'
import CircularProgress from '../../common/CircularProgress'
import Switch from '../../common/Switch'

const Index = () => {
    return (
        <>
            <section className='mt-10'>
                <Heading title={'Evaluation Objectives'} />
                <section className='grid lg:grid-cols-12 gap-[26px] mt-5'>
                    <div className='header-shadow bg-white rounded-xl col-span-2'>
                        <CardHeader title={'Account'} />
                        <div className='text-center mt-3'>
                            <p className='text-primary text-xs font-bold'>Equity</p>
                            <span className='text-primary text-[13px] font-semibold'>$50,000.00</span>
                        </div>
                        <div className='text-center mt-3'>
                            <p className='text-primary text-xs font-bold'>Balance</p>
                            <span className='text-primary text-[13px] font-semibold'>$50,000.00</span>
                        </div>
                    </div>
                    {[0, 2, 2].map((item, index) => <ProgressCard key={index} />)}
                    <div className='header-shadow bg-white rounded-xl col-span-2'>
                        <CardHeader title={'Minimum Trading Days'} />
                        <div className='mx-auto mt-5  h-16 w-16'>
                            <CircularProgress >
                                <h2 className='text-base font-bold'>4</h2>
                            </CircularProgress>
                        </div>
                    </div>
                    <div className='header-shadow bg-white rounded-xl col-span-2 text-center'>
                        <CardHeader title={'Customize'} />
                        <p className='text-primary font-semibold text-[13px] mt-4'>Switch Display</p>
                        <div className='mx-auto w-max flex-center gap-x-1 mt-2'>
                            <span className='text-primary font-semibold text-[13px]'>%</span>
                            <Switch />
                            <span className='text-primary font-semibold text-[13px]'>$</span>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Index