import React, { useState } from 'react'
import AppLogo from '../../assets/image/logo.svg'
import BellIcon from '../../assets/image/bell.svg'
import Avatar from '../../assets/image/user.png'
import ArrowDown from '../../assets/image/angle-small-down.svg'
import UKFlag from '../../assets/image/flage-icons/uk.svg'
import PakFlag from '../../assets/image/flage-icons/pak.svg'
import DropDownTransition from '../common/DropDownTransition'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const Header = () => {
  const [selectLang, setSelectLang] = useState({
    name: 'English',
    value: 'UK',
    icon: UKFlag
  })


  const lang = [
    {
      name: 'English',
      value: 'UK',
      icon: UKFlag
    },
    {
      name: 'Urdu',
      value: 'PK',
      icon: PakFlag
    },
  ]

  return (
    <>
      <header className='top-header  header-shadow ml-14 stander:ml-0'>
        <div className=''>
          <img src={AppLogo} alt='' />
        </div>
        <section className='flex items-center gap-x-6'>
          <div className='header-bell'>
            <img
              src={BellIcon}
              alt='bell Icon'
              className=' h-[22px] w-[22.3px]'
            />
            <div className='bell-dot'></div>
          </div>
          <div className='border-r-2 pr-6'>
            <Menu as="div" className='text-left relative inline-block '>
              {({ open }) => (
                <>
                  <div >
                    <MenuButton className='flex items-center text-left gap-x-3'>
                      <img
                        src={selectLang?.icon}
                        className='rounded-md object-cover w-10 h-[27px]'
                        alt='Profile'
                      />
                      <div>
                        <p className='app-text-color text-sm font-bold'>{selectLang?.name}</p>
                      </div>
                      <img
                        className={`${open ? '-rotate-180' : 'rotate-0'} transition-all `}
                        src={ArrowDown}
                        alt='' />
                    </MenuButton>
                  </div>

                  <DropDownTransition>
                    <MenuItems className="origin-top-right absolute top-2 right-0 mt-2 w-[150px] p-2 rounded-[5px] shadow-lg bg-white z-[99]">
                      {lang?.map((item, index) => <MenuItem key={index} onClick={()=>setSelectLang(item)}>
                        <button className=' flex items-center text-left gap-x-3 mb-2'>
                          <img
                            src={item?.icon}
                            className='rounded-md object-cover w-10 h-[27px]'
                            alt='Profile'
                          />
                          <div>
                            <p className='app-text-color text-sm font-semibold'>{item?.name}</p>
                          </div>
                        </button>
                      </MenuItem>
                      )}
                    </MenuItems>
                  </DropDownTransition>
                </>
              )}
            </Menu>
          </div>
          <div>
            <Menu as="div" className='text-left relative inline-block'>
              {({ open }) => (
                <>
                  <div >
                    <MenuButton className='flex items-center text-left gap-x-3'>
                      <img
                        src={Avatar}
                        className='rounded-full object-cover h-12 w-12'
                        alt='Profile'
                      />
                      <div>
                        <p className='app-text-color text-sm font-bold'>Thomas</p>
                        <p className='app-text-color text-xs'>User</p>
                      </div>
                      <img
                        className={`${open ? '-rotate-180' : 'rotate-0'} transition-all `}
                        src={ArrowDown}
                        alt='' />
                    </MenuButton>
                  </div>

                  <DropDownTransition>
                    <MenuItems className="origin-top-right absolute top-2 right-0 mt-2 w-[180px] py-5 px-[15px] rounded-[5px] shadow-lg bg-white   z-[99]">
                      <div className='flex gap-x-3 items-center border-b pb-[15px] mb-[15px]'>
                        <img src={Avatar} alt='' className='h-[38px] rounded-full border border-primary w-[38px]' />
                        <div>
                          <p className='app-text-color text-sm font-bold'>Thomas</p>
                          <p className='app-text-color text-xs'>User</p>
                        </div>
                      </div>
                      <MenuItem>
                        <button className=' app-text-color   text13 flex items-center gap-x-2'>
                          <p>Logout</p>
                        </button>
                      </MenuItem>
                    </MenuItems>
                  </DropDownTransition>
                </>
              )}
            </Menu>
          </div>
        </section>

      </header>
    </>
  )
}

export default Header