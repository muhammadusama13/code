import React, { useEffect, useState } from 'react'
import Arrow from '../../assets/image/arrow.svg'
import { Link } from 'react-router-dom'
import HomeIcon from '../svg/HomeIcon'
import CalendarIcon from '../svg/CalendarIcon'
import { useLocation } from 'react-router-dom';
import UKFlag from '../../assets/image/flage-icons/uk.svg'
import PakFlag from '../../assets/image/flage-icons/pak.svg'
import DownloadIcon from '../svg/DownloadIcon'

const Aside = () => {
    const routes = useLocation()
    const [showmenu, setShowmenu] = useState(false)
    const menu_list = [
        {
            name: 'Dashboard',
            path: '/',
            icon: <HomeIcon color='#fff' />,
            activeIcon: <HomeIcon color='#004D99' />

        },
        {
            name: 'Profile',
            path: '#',
            icon: <CalendarIcon color='#fff' />,
            activeIcon: <CalendarIcon color='#004D99' />

        },
        {
            name: 'Platforms',
            path: '#',
            icon: <DownloadIcon color='#fff' />,
            activeIcon: <DownloadIcon color='#004D99' />

        },



    ]

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 1299) {
                setShowmenu(true);
            }
        });
    }, []);

    return (
        <>
            <aside className={`${showmenu ? 'w-[65px] pb-3 ' : 'lg:w-[225px] xl:w-[251px] px-[36px] 2xl:w-[300px]'}  custom_transition  aside__section  `}>

                <div className={`${showmenu ? 'rotate-180' : 'rotate-0'} ml-auto absolute -right-5 top-3 custom_transition bg-bgColor h-7 w-7 rounded-full z-50  flex-center `}>
                    <button onClick={() => setShowmenu(!showmenu)} className='bg-white dark:bg-dark-bg h-[22px] w-[22px] rounded-full  flex-center '>
                        <img src={Arrow} />
                    </button>
                </div>
                <div>
                    {!showmenu && <button className='bg-white text-primary font-bold text-base w-full mt-10 py-3 rounded-full uppercase'>Buy Evaluation</button>}
                    <ul className='mt-20'>
                        {menu_list?.map((item, index) => <div key={index} className='my-1 mx-3'>
                            <Link to={item?.path}
                                className={`${routes.pathname == item.path ? 'bg-white' : 'bg-transparent'} ${showmenu ? 'px-2.5' : 'px-5'} py-3  flex items-center rounded-full gap-x-2`}
                            >
                                <span>
                                    {routes.pathname == item.path ? item?.activeIcon : item.icon}
                                </span>
                                <span className={`${showmenu ? "invisible" : 'visible'} ${routes.pathname == item.path ? 'text-primary' : 'text-white'} text-sm font-semibold `}>{item.name}</span>
                            </Link>
                        </div>
                        )}
                    </ul>
                </div>
                <div>
                    {!showmenu && <div className='text-sm text-white text-center mt-'>
                        <p className='font-bold'>AlpinEdge</p>
                        <span>Slope to Success</span>
                    </div>}
                    <div className='text-[13px] mt-5 text-white text-center'>
                        {!showmenu && <span>Technology built in-house in Austria</span>}
                        <div className={`${showmenu ? 'flex-col' : 'flex-row'} flex-center gap-x-3 mt-3`}>
                            <img src={UKFlag} alt='' className='h-6 w-6' />
                            <img src={PakFlag} alt='' className='h-6 w-6' />

                        </div>
                    </div>
                </div>

            </aside>
        </>
    )
}

export default Aside