import React from 'react'

const Sub = () => {
    return (
        <div className='bg-[#F8F8F8] h-[100%]'>
            <div className='px-32 py-28  '>
                <div className='text-5xl'><span></span>
                    Browse by Categories
                </div>
                <div className='  flex gap-4 mt-7'>
                    <div className='w-[50%] relative '>
                        <img src='/New folder/c6.png' alt='..' className='h-[88%] w-[100%]' />
                        <div class="absolute inset-0 bg-black h-[88%] bg-opacity-0 hover:bg-opacity-75 rounded-lg transition-all duration-300 flex items-end justify-center opacity-0 hover:opacity-100">
                            <span class="text-white text-4xl mb-4">Explore Food</span>
                        </div>
                    </div>
                    <div className='w-[50%] gap-'>
                        <div className="flex gap-9 relative">
                            <div className="relative w-[50%] h-[50%]">
                                <img src="/New folder/c5.png" className="w-full h-full" alt=".." />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 rounded-lg transition-all duration-300 flex items-end justify-center opacity-0 hover:opacity-100">
                                    <span className="text-white text-3xl mb-4">Master chefs </span>
                                </div>
                            </div>

                            <div className="relative w-[50%] h-[50%]">
                                <img src="/New folder/c3.png" className="w-full h-full" alt=".." />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 rounded-lg transition-all duration-300 flex items-end justify-center opacity-0 hover:opacity-100">
                                    <span className="text-white text-3xl mb-4">Desserts</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-9 relative mt-4">
                            <div className="relative w-[50%] h-[50%]">
                                <img src="/New folder/c4.png" className="w-full h-full" alt=".." />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 rounded-lg transition-all duration-300 flex items-end justify-center opacity-0 hover:opacity-100">
                                    <span className="text-white text-3xl mb-4">Events</span>
                                </div>
                            </div>

                            <div className="relative w-[50%] h-[50%] ">
                                <img src="/New folder/c4.png" className="w-full h-full" alt=".." />
                                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 rounded-lg transition-all duration-300 flex items-end justify-center opacity-0 hover:opacity-100">
                                    <span className="text-white text-3xl mb-4">Events</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sub