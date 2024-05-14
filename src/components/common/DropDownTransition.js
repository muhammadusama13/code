import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const DropDownTransition = ({ children }) => {
    return (
        <>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <div className='relative z-[99] '>
                    {children}
                </div>
            </Transition>
        </>
    )
}

export default DropDownTransition