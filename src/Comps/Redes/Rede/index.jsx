/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const Rede = ({Text, Icon, Link}) => {
    return (
        <>
        <a href={Link} target="_blank" rel="noreferrer" className='flex flex-row flex-nowrap items-center justify-center gap-[5px] w-[160px] h-[42px] bg-sky dark:bg-gray hover:bg-sky-dark dark:hover:bg-gray rounded-[10px] shadow-xl hover:shadow-2xl transition .3s'> <Icon className='text-white dark:text-sky dark:hover:text-sky-dark text-[1.5rem] transition .3s'/> <span className='font-Syne font-[700] text-white text-[1rem] dark:text-sky dark:hover:text-sky-dark transition .3s'>{Text}</span></a>
        </>
    );
}

export default Rede;
