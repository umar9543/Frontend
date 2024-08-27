import React from 'react'
import BookingComponent from './BookingComponent'
import Avatar from './Avatar'
import GroupAvatars from './Avatar'
import './hero.css'

const HeroSection = () => {
  return (
    <div className=' flex'>
      <div className='w-[50%] ink flex flex-col gap-11  '>
        <div className='w-[90%]  mt-16 gest  '>
          <h1 className='text-7xl font-gilroy font-bold text'>
            Book <span className='text-[#087BBA]'> O16 Labs</span><br/> For your <br/>  Dinner <span className='text-[#087BBA]'>Party</span>
          </h1>
         
        </div>
        <div> <p className='font-gilroy font-regular'>we're providing the best chef booking platform</p>
        <p className='font-gilroy font-regular'>choose a menu and click your chef instantly</p></div>
        <div className='h-[100px] mt-3  book '>
          <BookingComponent />
        </div >
        <div className='flex gap-x-11 hap '>
          <div className='flex justify-start h-[20%]  '>
            <GroupAvatars />
            <div>
              <p>Our  happy customers</p>
              <p><span>⭐</span>4.7  (8.2k reviews)</p>
            </div>
          </div>
          <div>
            <p> we accept</p>
           <div className='flex gap-1'>
           <span><img src='New folder/9.png'height={25} width={30} alt='..'/></span>
           <span><img src='New folder/8.png'height={15} width={25} alt='..'/></span>
           </div>
          </div>
        </div>
      </div>
      <div className='w-[50%] relative small'>
        <div className='absolute top-[60px] left-[150px]  '><img src='New folder/7.png' height={120} width={50} alt='.' /></div>

        <div className='absolute top-[160px] left-[80px] '><img src='New folder/17.png' className='media4' height={200} width={200} alt='.' /></div>
        <div className='absolute top-[80px] left-[220px] rotate-1 '><img src='New folder/10.png' className='media' height={250} width={300} alt='.' /></div>
        <div className='absolute top-[210px] left-[460px]  '><img src='New folder/16.png'   className='media3'  alt='.'  height={50} width={200}  /></div>
        <div className='absolute top-[270px] left-[280px] '><img src='New folder/15.png'  height={200} width={250} className='media5' alt='.' /></div>


      </div>
    </div>
  )
}

export default HeroSection