import React from 'react'
import Card from 'react-bootstrap/Card';

import { Image } from 'react-bootstrap';
const Cards = () => {
    const items = [
        {
            image: "/New folder/c1.png",
            text: " pick out of 10 dishes",
            p: "QAR 200",
            sm: "/New folder/4.png",
            pp: "Mariott head chef",
        },
        {
            image: "/New folder/c2.png",
            text: " pick out of 10 dishes",
            p: "QAR 200",
            sm: "/New folder/4.png",
            pp: "Mariott head chef",
        },
        {
            image: "/New folder/c1.png",
            text: " pick out of 10 dishes",
            p: "QAR 200",
            sm: "/New folder/4.png",
            pp: "Mariott head chef",
        },
        {
            image: "/New folder/c2.png",
            text: " pick out of 10 dishes",
            p: "QAR 200",
            sm: "/New folder/4.png",
            pp: "Mariott head chef",
        },
    ]


    return (
        <div className='h-[100%]  flex  ml-11  overflow-x-scroll scrollbar-hide gap-x-11 border-0 sm:gap-x-1 '>
            <div className='   '>
                <div className='w-[500px] text-7xl font-gilroy font-bold'>
                    Our Most <span className='text-[#087BBA]'>Popular Dishes</span> This Month
                </div>
                <div className='rounded-full bg-[#087BBA] w-28 p-2 h-11 text-xl flex items-center justify-center mt-7'>See all</div>
            </div>
            <div className=' flex   gap-x-11  '>
                {
                    items.map((items) => {
                        return (
                            <Card style={{ width: '18rem' }} className='bg-white'>
                                <Card.Img variant="top" src={items.image} className='h-[200px] w-[300px]' />
                                <Card.Body className='p-4'>
                                    <Card.Title>{items.title}</Card.Title>
                                    <Card.Text >
                                        {items.text}
                                    </Card.Text>
                                    <Card.Text className='font-bold'>
                                        {items.p}
                                    </Card.Text><hr />
                                    <div className='flex items-center gap-x-7'>
                                        <Image src={items.sm} width={50} className='mt-2' />
                                        <Card.Text className='font-bold'>
                                            {items.pp}
                                        </Card.Text>
                                        <h3>star</h3>
                                    </div>
                                </Card.Body>
                            </Card>


                        )
                    })
                }


            </div>

        </div>
    )
}

export default Cards