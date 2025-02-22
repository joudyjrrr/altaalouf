import React from 'react'
import { Button } from '../ui/button'
import { award1, award2, award3, award4 } from "../../../public/images"
import Image from 'next/image'
import Title from './Title'
const AwardSection = () => {
    const cards = [
        { title: "Top 100 Most Truste Financial Institution in the Middle East", img: award1 },
        { title: "The Fastest Growing Broker in the Middle East", img: award2 },
        { title: "Best STP Broker in the Middle East", img: award3 },
        { title: "Lowest Spread Broker in the Middle East", img: award4 },

    ]
    return (
        <div className="bg-[#0F2147] p-4 mt-8 ">
            <div className="bg-award_back h-full">
                <Title title1={`Legendary`} title2={`Awards`} />

                <div className='grid grid-cols-4 gap-4 mt-24'>
                    {cards.map((d, idx) => (
                        <div key={idx} className='flex flex-col justify-center items-center relative '>
                            <Image src={d.img} alt='' className='w-full h-full ' />
                            <div className='bg-awarc_card_back py-8 text-center absolute rounded-b-xl bottom-[1px] h-[28%] end-[-3px] w-full z-[10000]'>
                                <h1 className='text-white text-lg  font-medium'>{d.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AwardSection