import React from 'react';

const Projeto = ({Title, Paragraf, Link}) => {
	return (
		<div className='flex flex-col flex-nowrap items-start justify-center gap-[5px] bg-white dark:bg-gray w-[240px] h-[150px] p-[10px] rounded-xl shadow-xl hover:shadow-2xl transition .3s'>
		
			<h1 className='w-full h-auto font-Syne font-[700] text-dark dark:text-white text-[1.2rem]'>{Title}</h1>

			<p className='w-full h-full font-Syne font-[700] text-dark dark:text-white text-justify text-[.8rem]'>{Paragraf}</p>
			
			<a href={Link} target='_blank' rel="noreferrer" className='font-Syne font-[700] text-white dark:text-sky dark:hover:text-sky-dark px-[20px] py-[2px] rounded-[200px] bg-sky dark:bg-dark dark:hover:bg-dark hover:bg-sky-dark transition .3s'>View</a>

		</div>
	);
}

export default Projeto;
