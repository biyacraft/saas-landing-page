"use client"
import StarImage from '../assets/images/star.png'
import ArrowIcon from '../assets/icons/arrow-w.svg'
import CursorImage from '../assets/images/select.png'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { AnimatedGradientTextDemo } from './animatedtext';

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#1a1a1a_34%,#333333_65%,#4d4d4d_82%)] py-[72px] sm:py-24 relative overflow-clip">
    <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] llg:h-[800px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#666666] bg-[radial-gradient(ellipse_at_center,#ffffff10_0%,#00000080_50%,#000_100%)] backdrop-blur-sm top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div><div className="container relative">
        <div className="flex items-center justify-center -mt-10">
          <AnimatedGradientTextDemo />
        </div>
        <div className="flex justify-center mt-8 ">
          <div className="inline-flex relative">
            <h1 className='text-7xl sm:text-9xl font-bold tracking-tightner text-center inline-flex'>Payment has never<br /> been this easy</h1>
            <motion.div className='absolute right-[1000px] top-[108px] hidden sm:inline'
              drag
              dragSnapToOrigin

            >
              <Image src={StarImage} alt="cursor" height={200} width={200} className='max-w-none' draggable="false" />
            </motion.div>
            <motion.div className='absolute left-[1000px] top-[56px] hidden sm:inline'
              drag
              dragSnapToOrigin
            >
              <Image src={CursorImage} alt="cursor" height={200} width={200} className='max-w-none' draggable="false" />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className='text-xl text-center mt-8 max-w-md'>No more interpretive dances with your credit card, no more sacrificing your firstborn
             to buy socks online. We've somehow 
            managed to achieve the utterly impossible task of moving money from Point A to Point B without requiring a PhD in rocket science.</p>
        </div>
        <div className="flex justify-center mt-8">
          <button className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Get for free</button>
        </div>


      </div>


    </div>
  )
};
