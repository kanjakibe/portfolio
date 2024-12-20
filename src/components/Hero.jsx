import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { div, section } from 'framer-motion/client';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { profile } from '../assets';


const Hero = () => {
  
  return (
    
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Nelson</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Full Stack Web Developer</p>
        </div>

        
      </div>

      {/* <ComputersCanvas /> */}
      
      <div className='absolute xs:bottom-[20%] max-sm:w-[100%] max-sm:h-[150%] w-full h-[9%] flex justify-center items-center'>
            <img src={profile} alt="profile" className='w-[16%] max-sm:w-[50%] rounded-full' />
        </div>

      
    
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center hidden'>
     
        <a href="#about">
          <div className='w-[35px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero