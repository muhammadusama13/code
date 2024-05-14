import React from 'react'
import Heading from '../../common/Heading'
import SummaryTable from './SummaryTable'

const Index = () => {
    return (
        <>
            <section>
                <Heading title={'Daily Summary'} />
                <section className='header-shadow bg-white rounded-xl px-[18px] mt-4 py-7'>
                    <SummaryTable />
                </section>
            </section>
        </>
    )
}

export default Index