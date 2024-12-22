import React from 'react';

import Logo from './../../img/Logo.png';

import { IoIosSunny } from "react-icons/io";
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";

const Header = () => {
    return (
        <>
        <header className='fixed top-0 left-0 w-full h-[100px] bg-white dark:bg-dark shadow-lg hover:shadow-2xl transition .3s'>

            <div className='flex flex-row flex-nowrap items-center justify-between w-full t:max-w-[550px] h-full mx-auto px-[20px]'>

                <img src={Logo} alt="Logo" className='w-[60px] h-[60px]' />

                <div className='flex flex-row flex-nowrap items-center justify-center gap-[10px]'>

                    <button type="submit" className='hidden g:block px-[20px] py-[10px] bg-white dark:bg-gray font-Syne font-[700] text-sky dark:hover:text-sky-dark text-[1.2rem] shadow-xl hover:shadow-2xl rounded-lg transition .3s'>Conversar</button>
                
                    <button type="submit" className='dark:hidden flex flex-row flex-nowrap items-center justify-center w-[48px] h-[48px] bg-white dark:bg-gray text-sky dark:hover:text-sky-dark text-[1.2rem] shadow-xl hover:shadow-2xl rounded-lg transition .3s'><IoIosSunny /></button>
                
                    <button type="submit" className='dark:flex hidden flex flex-row flex-nowrap items-center justify-center w-[48px] h-[48px] bg-white dark:bg-gray text-sky dark:hover:text-sky-dark text-[1.2rem] shadow-xl hover:shadow-2xl rounded-lg transition .3s'><WiMoonAltWaningCrescent2 /></button>
                
                </div>

            </div>

        </header>
        </>
    );
}

export default Header;