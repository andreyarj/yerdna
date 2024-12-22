import React from 'react';

const Skill = ({Icon}) => {
    return (
        <>

        <div className='flex flex-col flex-nowrap items-center justify-center w-[80px] h-[80px] bg-white dark:bg-gray shadow-xl hover:shadow-2xl rounded-[20px] transition .3s'>

            <Icon className='text-sky text-[2.2rem]'/>

        </div>
        
        </>
    );
}

export default Skill;
