import React from 'react'
import { Button } from '../ui/button'

const Switch = () => {
    return (
        <div className='flex button-border-transparent  my-8 w-[300px]'>
            <Button className="bg-main_button rounded-[50px] !p-4 w-full text-lg cursor-pointer">
                MT5
            </Button>
            <Button className="bg-transparent rounded-[50px] !p-4 w-full text-lg cursor-pointer">
                cTrader
            </Button>
        </div>
    )
}

export default Switch