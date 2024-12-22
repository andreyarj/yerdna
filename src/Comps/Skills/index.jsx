import React from 'react';

import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";


import Skill from './Skill';

const Skills = () => {
    return (
        <>
        <section id="Skills" className='w-full h-full bg-white'>

            <div className='flex flex-row flex-wrap items-center justify-center gap-[20px] w-full h-auto p-[20px] mx-auto t:max-w-[550px]'>

                <Skill Icon={RiTailwindCssFill}/>

                <Skill Icon={FaCss3}/>

                <Skill Icon={FaJsSquare}/>

                <Skill Icon={FaHtml5}/>

                <Skill Icon={FaNodeJs}/>

            </div>

        </section>
        </>
    );
}

export default Skills;
