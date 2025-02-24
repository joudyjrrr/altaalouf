import React from 'react'
import { Button } from '../ui/button'
import { award1, award2, award3, award4, Explore, arrwos, mobileInzo, android, mac, ios, windows, gift , square_left , square_rigtht } from "../../../public/images"
import Image from 'next/image'
import Title from './Title'
import Switch from './Switch'
const AwardSection = () => {
    const cards = [
        { title: "Top 100 Most Truste Financial Institution in the Middle East", img: award1 },
        { title: "The Fastest Growing Broker in the Middle East", img: award2 },
        { title: "Best STP Broker in the Middle East", img: award3 },
        { title: "Lowest Spread Broker in the Middle East", img: award4 },

    ]
    return (
        <div className="bg-gradient-to-b from-[#0F2147]  via-[#0F2147] via-80% to-white  relative   mt-16  ">
            <div className="bg-award_back h-fulla">
                <Title title1={`Legendary`} title2={`Awards`} />

                <div className='grid grid-cols-4 gap-4 mt-24 p-4'>
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
            <div className="relative z-[1000] bg-star_background   text-white mt-16"
                style={{ clipPath: "ellipse(75% 50% at 50% 50%)" }}>
                <div className="relative w-full bg-transparent flex justify-center items-center text-center pt-8">
                    <Image src={Explore} width={200} height={50} className="" alt="inzo" />
                    <div className="absolute top-[55px] flex gap-2 text-5xl font-bold">  <h1 className="text-white">{`Our`}</h1><h1 className="text-secondary">{`Trading Platforms`}</h1></div>
                    <div className='absolute top-[100px] end-[25%]'>
                        <Image src={arrwos} width={200} height={50} className="" alt="inzo" />
                    </div>
                </div>
                <div className='flex px-[15rem] pt-10 justify-between'>
                    <Image src={mobileInzo} width={500} height={50} className="" alt="inzo" />
                    <div className='flex flex-col items-center  pt-[8rem]'>
                        <div className='flex flex-col text-center gap-1 text-white text-2xl font-medium'>
                            <h1>Download our app</h1>
                            <h1>for all type of your devices.</h1>
                        </div>
                        <Switch />
                        <div className="relative w-[350px] h-[300px]">
                            <div className="absolute top-4 left-[40%] flex flex-col items-center justify-center w-28 h-28">
                                <Image src={android} alt='' />
                            </div>
                            <div className="absolute top-[25%] right-[-10px] flex flex-col items-center justify-center w-28 h-28 ">
                                <Image src={ios} alt='' />
                            </div>
                            <div className="absolute bottom-[7rem] left-[1rem] flex flex-col items-center justify-center w-28 h-28 ">
                                <Image src={windows} alt='' />
                            </div>
                            <div className="absolute bottom-12 right-[30%] flex flex-col items-center justify-center w-28 h-28 ">
                                <Image src={mac} alt='' />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <div className='flex gap-4'>
                        <div className='bg-social_gradiant rounded-t-xl p-4' >
                            <div className='flex justify-between '>
                                <h1 className='text-secondary  text-5xl font-semibold'> <span>$</span>30</h1>
                                <Image src={gift} alt='' width={60} className='' />
                            </div>
                            <h1 className='text-2xl mb-2'>Welcome Bonus</h1>
                            <p className='text-lg'>Open real trading account and get .</p>
                            <p>$30 welcome bonus</p>
                        </div>
                        <div className='bg-social_gradiant rounded-t-xl p-4' >
                            <div className='flex justify-between '>
                                <h1 className='text-secondary  text-5xl font-semibold'>30 <span>%</span></h1>
                                <Image src={gift} alt='' width={60} className='' />
                            </div>
                            <h1 className='text-2xl mb-2'>Deposit Bonus</h1>
                            <p className='text-lg'>Deposit money for 30% bonuses.</p>
                            <p>on your account</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-between absolute bottom-[-70px] w-full'>
                <Image src={square_left} width={400} height={400} className="" alt="inzo" />
                 <Image src={square_rigtht} width={400} height={400}  className="" alt="inzo" />
            </div>

        </div>
    )
}

export default AwardSection
