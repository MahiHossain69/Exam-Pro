import React from 'react'
import Container from './Container'
import Ban1 from "../assets/Banner 1.png"
import Ban2 from "../assets/Banner 2.png"
import Ban3 from "../assets/Banner deg2.png"

function Banner() {
  return (
    <div className=''>
      
      <Container className="">
        <div className="w-[875px] mt-[150px]">
        <div className="leading-[135px]">
            <h1 className=' text-[100px] font-bold'>We Are Digital <span className='text-[#FF7628] text-[100px] font-bold'>Marketing</span> Agency</h1>
        </div>
        </div>
        <div className="text-[29px] font-normal w-[700px] mt-[30px] ">
            <p>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
        </div>
        <div className="mt-[30px]">
    
    <button className="bg-[#FF7628] hover:bg-gray-700 text-white font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-[50px]">Get free quoto</button>
  </div>

<div className="relative">
    <div className="absolute top-[-725px] right-[-150px]"> 
        <img src={Ban3}/>
    </div>
<div className="absolute right-[-100px] top-[-18px]">
  <img className='w-[390px]  mt-[-550px] ' src={Ban1}/>
 
</div>
<div className="absolute left-[1110px] top-[145px] ">
<img className='w-[390px] mt-[-550px]' src={Ban2}/>
</div>
</div>




      </Container>
    </div>
  )
}

export default Banner
