import React from 'react'
import DetailLableValue from './DetailLableValue'
import LoginIcon from '../../assets/image/ri_login-circle-line.svg'
import SupportIcon from '../../assets/image/Vector.svg'

const DashboardDetail = () => {
    return (
        <>
            <section className='bg-white header-shadow  px-14 py-7 rounded-xl mt-3'>
                <DetailLableValue
                    lable={'Status:'}
                    value={'Ongoing'}
                />
                <DetailLableValue
                    lable={'Start:'}
                    value={'12 March 2024 08:50:0'}
                />
                <DetailLableValue
                    lable={'End:'}
                    value={'02 April 2024 08:50:02'}
                />
                <DetailLableValue
                    lable={'Platform:'}
                    value={'MT5+ | JFD Brokers'}
                />
                <DetailLableValue
                    lable={'Last Updated:'}
                    value={'12 March 2024 08:50:02'}
                />
                <div className='flex-center gap-x-3 mt-7'>
                    <div className='bg-primary flex-center rounded-full py-2 px-3 gap-x-2 text-white text-[13px]' role='button'>
                        <img src={LoginIcon} alt='' />
                        <p>Login Credential</p>
                    </div>
                    <div className='border border-primary flex-center rounded-full py-2 px-3 gap-x-2 text-primary text-[13px]' role='button'>
                        <img src={SupportIcon} alt='' />
                        <p>Get Support</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashboardDetail