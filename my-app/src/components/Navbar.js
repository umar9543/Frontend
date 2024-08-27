import React from 'react'

const Navbar = () => {
    return (
        <div className=' flex justify-between items-center text-gray-300 opacity-[0.1px] font-gilroy font-medium  ' >
            <div>
                <img src='img_header_logo.svg' alt='..' />
            </div>
            <div className='gap-x-20 flex' >
                <div className='hover:text-black underline1 cursor-pointer'>Home</div>
                <div className='hover:text-black underline1 cursor-pointer '>How it Works</div>
                <div className='hover:text-black underline1 cursor-pointer'>Our Chefs</div>
                <div className='hover:text-black underline1 cursor-pointer'>Book</div>
            </div>
         <div className='flex gap-x-4'>
            <div>Signup</div>
            <div>
                login
            </div>
         </div>
        </div>
    )
}

export default Navbar