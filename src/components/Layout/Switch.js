import React from 'react'
import { Button } from '../ui/button'

const Switch = ({className2}) => {
    return (
        <div className='flex button-border-transparent  my-8 w-[300px]'>
            <Button className="bg-main_button rounded-[50px] !p-4 w-full text-2xl font-bold cursor-pointer">
                MT5
            </Button>
            <Button className={`bg-transparent rounded-[50px] !p-4 w-full text-2xl font-bold cursor-pointer text-[#0F2147] ${className2}`}>
                cTrader
            </Button>
        </div>
    )
}

export default Switch