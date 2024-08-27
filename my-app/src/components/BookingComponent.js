import React, { useState } from 'react';

const BookingComponent = () => {
    const [region, setRegion] = useState('Al Shamal');
    const [dateRange, setDateRange] = useState('15 Jan - 20 Jan 2022');
    const [persons, setPersons] = useState(5);

    return (
        <div className='rounded-3xl bg-white  shadow-2xl h-[100%] flex justify-evenly items-center '>
            <div>
                <div className='flex gap-2'>
                    <span><img src='New folder/image.png'height={15} width={15} alt='..'/></span>
                    <span>select region</span>
                    <span className='mt-2'><img src='New folder/18.png' width={15} height={15} alt='..' /></span>
                </div>
                <div className='mt-3'>Al shamal <span > الشمال</span></div>
            </div>

            <div className=' w-[1px] h-[70px] bg-[#1f1f1f]  opacity-[0.2]' />
            <div>
                <div>
                    <div className='flex gap-2'>
                        <span>ic</span>
                        <span>select date</span>
                        <span className='mt-2'><img src='New folder/18.png' width={15} height={15} alt='..' /></span>
                    </div>
                    <div className='mt-3'>15 jan-20 jan 2022</div>
                </div>
            </div>
            <div className=' w-[1px] h-[70px] bg-[#1f1f1f] opacity-[0.2]' />
            <div>
                <div>
                    <div className='flex gap-2'>
                        <span>ic</span>
                        <span>select persons</span>

                    </div>
                    <div className='flex items-center justify-center gap-x-2 mt-3'>
                        <span onClick={() => setPersons(persons + 1)}><img src='New folder/2.png' height={20} width={20} alt='..' /></span>
                        {persons}
                        <span onClick={() => setPersons(persons - 1)}><img src='New folder/3.png' height={20} width={20} alt='..' /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingComponent;
