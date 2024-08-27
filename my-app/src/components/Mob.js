import React from 'react'
import './mob.css'

const Mob = () => {
  return (
    <div className="mt-44 pt-5 sm:mt-20 lg: xlg:-mt-[500px]   flex items-center justify-center flex-col px-11   sm:h-[70vh] ">
      <div className='back bg-contain flex flex-col justify-center  items-center h-[60%] sm:h-[50%] lg:h-[40%] relative gap-4 sm:gap-6 lg:gap-9'>
        <div className='absolute left-8  sm:left-12 lg:left-16 '>
          <img src='/New folder/19.png' alt='..' className='w-28 sm:w-36 lg:w-48 media2' />
        </div>
        <div className='text-4xl sm:text-4xl font-gilroy font-bold text-white text-center -mt-11  resp'><span>Download Our App</span>
          <div className='flex gap-4 sm:gap-6 lg:gap-11 mt-5 box'>
            <img src='/New folder/11.png' alt='..' className='w-28 sm:w-36 lg:w-48' />
            <img src='/New folder/12.png' alt='..' className='w-28 sm:w-36 lg:w-48' />
          </div>
        </div>
        <div className='absolute  bottom-4 -right-10'>
          <img src='/New folder/14.png' alt='..' className='w-24 sm:w-28 lg:w-36 res' />
        </div>
        <div className='absolute bottom-0 sm:-top-8  right-8 sm:right-10 lg:right-11'>
          <img src='/New folder/13.png' alt='..' className='w-24 sm:w-28 lg:w-36' />
        </div>
      </div>
    </div>
  )
}

export default Mob