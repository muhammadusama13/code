import React, { useState } from 'react'
import Aside from './Aside'
import Header from './Header'

const Index = ({ children }) => {

    return (
        <>
            <main className='p-[29px]  bg-bgColor'>
                <Header />

                <section className='relative mt-8 flex'>
                    <Aside />
                    <section className='pl-14 stander:pl-5 flex-1 shrink-0 pt-2 overflow-y-auto hide_srcoll_bar '>
                        {children}
                    </section>
                </section>
            </main>
        </>
    )
}

export default Index