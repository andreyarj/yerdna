import React from 'react';
import Projeto from './Projeto';

const Projetos = () => {
    return (
        <>
        <section id="Projetos" className='w-full h-auto bg-white dark:bg-dark'>
        
            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-full t:max-w-[550px] h-auto p-[20px] mx-auto'>

                <Projeto Title='Tourfy' Paragraf='Simples site de viajem, A Tourfy é um projeto ficticio.' Link='https://tourfy.netlify.app'/>
                
                <Projeto Title='Em Breve' Paragraf='Projeto será lançado em breve, Aguarde atualizações.'/>

                <Projeto Title='Em Breve' Paragraf='Projeto será lançado em breve, Aguarde atualizações.'/>

                <Projeto Title='Em Breve' Paragraf='Projeto será lançado em breve, Aguarde atualizações.'/>

            </div>
        
        </section>        
        </>
    );
}

export default Projetos;
