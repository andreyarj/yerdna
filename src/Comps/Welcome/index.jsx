import React from 'react';

const Welcome = () => {
    return (
        <>
        <section id='Welcome' className='w-full h-auto bg-white'>

            <div className='flex flex-col flex-nowrap items-center justify-center gap-[20px] w-full t:max-w-[550px] p-[20px] h-auto mx-auto'>

                <h1 className='w-full h-auto font-Syne font-[900] text-[1rem] g:text-[1.2rem] t:text-[1.4rem] l:text-[1.6rem] text-center text-dark'>Desenvolvimento Web UI & UX com a melhor <span className='px-[5px] bg-sky hover:bg-sky-dark text-white transition .3s'>performançe</span>.</h1>

                <p className='w-full h-auto font-Syne font-[700] text-center text-[.8rem] g:text-[.9rem] t:text-[1rem] l:text-[1.1rem]'>Sonhe, Pensa e Ponha em pratica, Misture <span className='px-[5px] bg-sky hover:bg-sky-dark text-white transition .3s'>Design</span> e Desenvolvimento Web e Veja a magia acontecer.</p>
            
                <button type="submit" className='bg-sky hover:bg-sky-dark text-white px-[30px] py-[10px] font-Syne font-[700] text-sky text-[1.2rem] shadow-xl hover:shadow-2xl rounded-[200px] transition .3s'>Conversar</button>
            
            </div>

        </section>
        </>
    );
}

export default Welcome;