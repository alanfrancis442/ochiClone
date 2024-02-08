"use client"
import { motion } from "framer-motion"
import { useState } from "react";
import { useAnimate } from "framer-motion";
useState
function Hero1() {

  const  [scope,animate] = useAnimate()

  const imgHandeler = ()=>{
    //
    animate('.image',{
      scale:0.980,
    },{
      duration:0.5
    })

    animate('button',{
      
    })
  }

  const imgrmHandeler = ()=>{
    //
    animate('.image',{
      scale:1,
    },
    {
      duration:0.5
    })
  }

  return (
    <>
      <div ref={scope} className="bg-[#CDEA68] pt-28 rounded-t-2xl">
        <div className="p-16 text-6xl font-['Neue Montreal']">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </div>
        <div className="flex p-6 justify-between px-20 pb-40 text-xl border-t-[1px] border-black">
          <div className="w-1/2">What you can expect:</div>
          <div className="flex flex-col gap-12 w-1/4">
                <p>
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
                </p>
                <p>
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
                </p>
          </div>
                <ul>
                    <li>instagram</li>
                </ul>
        </div>
        <div className="flex pt-6 justify-between px-20 pb-20 text-xl border-t-[1px] border-black">
            <div className="">
                <p className="text-6xl tracking-tighter">Our approach:</p>
                <button onMouseEnter={imgHandeler} onMouseLeave={imgrmHandeler} className=" anibtn capitalize text-white p-4 px-8 mt-2 border-2 rounded-full border-black bg-[#212121] relative                ">
                    read more 
                </button>
            </div>
            <div className="w-1/2">
                <img className="image rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="image" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
