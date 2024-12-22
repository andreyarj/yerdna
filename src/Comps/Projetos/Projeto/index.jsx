import React from 'react';

const Projeto = ({Title, Paragraf}) => {
	return (
		<div className='flex flex-col flex-nowrap items-start justify-center gap-[5px] bg-white w-[280px] h-[150px] p-[10px] rounded-xl shadow-xl hover:shadow-2xl transition .3s'>
		
			<h1 className='w-full h-auto font-Syne font-[700] text-dark text-[1.2rem]'>{Title}</h1>

			<p className='w-full h-full font-Syne font-[700] text-dark text-[.8rem]'>{Paragraf}</p>
			
			<button type="submit" className='font-Syne font-[700] text-white px-[20px] py-[2px] rounded-[200px] bg-sky hover:bg-sky-dark transition .3s'>View</button>

		</div>
	);
}

export default Projeto;
