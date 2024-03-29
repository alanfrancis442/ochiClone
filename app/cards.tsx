import React, { useRef,useEffect } from 'react'
import gsap from "gsap";
import usegsap from 'gsap/all'
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Cards() {
   const container = useRef(null!)
   const inner = useRef(null!)
   useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
     console.log("use effect is working")
    //  gsap.to(inner.current,{
    //     x:100,
    //     y:500,
    //     scrollTrigger:{
    //         trigger:container.current,
    //         pin:true,
    //         markers:true,
    //         start:"top top",
    //         end:"bottom top",
    //         scrub:1,
    //     }
    //  })

   }, [])
   
  return (
    <div ref={container} className='bg-blue-300 h-screen'>
        <div ref={inner} className='bg-red-500 h-4 w-4'>Cards</div>
    </div>
  )
}
