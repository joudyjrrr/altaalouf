import React from 'react'
import {  FaFacebookF, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from '../ui/button';
const VerticalSotial = () => {
  return (
    <div className=" w-full  flex justify-end pe-16">

    <div className="flex flex-col gap-4 justify-center items-center">
      <div className="w-[2px] h-[150px] rounded-t rounded-xl bg-gradient-to-b from-primary to-secondary"> </div>
      <Button className="button-border rounded-full h-10 w-10">
        <FaXTwitter />
      </Button>
      <Button className="button-border rounded-full h-10 w-10">
        <FaFacebookF />
      </Button>
      <Button className="button-border rounded-full h-10 w-10">
        <FaInstagram />
      </Button>
      <Button className="button-border rounded-full h-10 w-10">
        <FaTelegramPlane />
      </Button>
      <Button className="button-border rounded-full h-10 w-10">
        <FaYoutube />
      </Button>
      <div className="w-[2px] h-[150px] rounded-t rounded-xl bg-gradient-to-b from-primary to-secondary"> </div>
    </div>
  
  </div>
  )
}

export default VerticalSotial