import React from 'react';

import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Rede from './Rede';

const Redes = () => {
    return (
        <>
        <section id="Redes" className='w-full h-auto bg-white dark:bg-dark'>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-full t:w-[550px] h-auto mx-auto p-[20px]'>
                
                <Rede Text='WhatsApp' Icon={IoLogoWhatsapp} Link='https://api.whatsapp.com/send/?phone=5511954879771'/>

                <Rede Text='Instagram' Icon={RiInstagramFill} Link='https://www.instagram.com/yerdna.arj/'/>

                <Rede Text='Facebook' Icon={FaFacebook} Link='https://www.facebook.com/andrey.araujo.9421450'/>

                <Rede Text='LinkedIn' Icon={FaLinkedin} Link='https://www.linkedin.com/in/andrey-araujo-8724992a7/'/>

                <Rede Text='Email' Icon={MdEmail} Link='mailto:andrey.araujo.ofc@gmail.com'/>

            </div>

        </section>
        </>
    );
}

export default Redes;
