import React from 'react'
import Title from './Title'
import { team1, team2, team3, team4 } from "../../../public/images"
import Image from 'next/image'
import { Button } from '../ui/button'
import Switch from './Switch'
import BannerSwiper from './BannerSwiper'

const TeamSection = () => {
    const ImageArray = [team1, team2, team3, team4]
    return (
        <div className='bg-white w-full  relative curved-section '>
          <div className='bg-star_background2 w-full h-full bg-center bg-cover pb-8'>
            <div className='bg-team_gradiat text-center text-white mb-4'>
                <BannerSwiper/>
                <Title title1={`Copy Best `} title2={`Traders`} />
                <p className='text-lg mt-10'>INZO offer several types of accounts that are suitable for different trading environments.</p>
            </div>
           <div className='flex w-full justify-center'>
          <Switch className2={`!text-white`}/> 
           </div>
            <div className='grid grid-cols-4 gap-4 px-8'>
                {ImageArray.map((img, index) => (
                    <div  key={index} className='button-border rounded-xl'>
                        <div className='bg-team_card rounded-xl h-[300px] text-white bg-no-repeat bg-center bg-cover flex gap-2 flex-col p-4 justify-center items-center text-center'>
                            <Image src={img} alt='' width={150} height={150} />
                            <p >Total Profit</p>
                            <p className='text-3xl font-bold '><span>$</span>11.4760 </p>

                        </div>
                    </div>
                ))}
            </div>  
            <div className='flex w-full justify-center'>
            <Button className="button-border !rounded-xl w-fit mx-auto my-8">Show More</Button>
            </div>
        </div>

      </div>
    )
}

export default TeamSection