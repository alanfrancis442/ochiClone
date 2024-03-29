"use client"
import { easeOut, motion } from "framer-motion"
import { useAnimate } from "framer-motion";
import { Tienne } from "next/font/google";
import { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function Projects() {


  const  [scope1,animate] = useAnimate()
  const [div1Content, setdiv1Content] = useState("")
  const [div2Content, setdiv2Content] = useState("")
  const [isFocus, setisFocus] = useState(false)

  const imgHandeler = (e,title:string)=>{
    //
    setisFocus(true)
    e<2 ? setdiv1Content(title) : null
    e>1 ? setdiv2Content(title) : null
    animate(`.imageContainer${e}`,{
      scale:0.960,
    },{
      duration:0.5,
      ease:"easeOut",
    })

    animate(`.image${e}`,{
      scale:1.1,
    },
    {
      duration:0.5,
      ease:"easeOut",
    })

    animate('button',{
      
    })
  }

  const imgrmHandeler = (e)=>{
    //
    // setdiv1Content("")
    setisFocus(false)
    animate(`.imageContainer${e}`,{
      scale:1,
    },
    {
      duration:0.5,
      ease:"easeOut",
    })

    animate(`.image${e}`,{
      scale:1,
    },
    {
      duration:0.5,
      ease:"easeOut",
    })

  }


    let data = [
        {
            "img":"https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png",
            'title':"FYDE",
            'btns':['AUDIT','COPYWRITING','SALES DESK','SLIDER DESIGN']
        },
        {
            "img":"https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg",
            'title':'VISE',
            'btns':['AGENCY','COMPANY PRESNTATION']
        },
        {
            "img":"https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg",
            'title':"TRAWA",
            'btns':['BRAND IDENTITY','INVESTOR DESK','DESIGN RESERCH']
        },
        {
            "img":"https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png",
            'title':"PREMIUM BLEND",
            'btns':['BRANS TEMPLATES']
        },
    ]

    const textVariance = {
      initial:{
        y:100,
        opacity:0,
      },
      enter:{
        y:0,
        opacity:1,
      },
      exit:{
        y:100,
        opacity:0,
      }
    }
    return ( 
        <>
        <div className="h-screen w-full bg-white">
            <h1 className="p-20 pb-10 tracking-tight text-7xl">
                projects
            </h1>
            <hr className="w-full h-[1.5px] bg-black" />
            <div ref={scope1} className="h-screen w-full p-10 grid gap-4 grid-cols-2 relative">
              <div className="div1 absolute text-[#CDEA68] tracking-tighter font-bold w-1/2 top-[50%] -translate-y-[50%] left-[25%] text-8xl flex justify-center items-center z-40 h-1/5">
                {div1Content.split("").map((e,i)=>{
                  return <motion.span
                  variants={textVariance}
                  initial="initial"
                  animate={isFocus?"enter":"initial"}
                  transition={{
                    duration:0.3,
                    delay:0.05*i,
                  }}
                  >{e}</motion.span>
                })}
              </div>
              <div className="div2 absolute text-[#CDEA68] tracking-tighter font-bold w-1/2 bottom-[-50%] translate-y-[50%] left-[25%] text-8xl flex justify-center items-center z-40 h-1/5">
              {div2Content.split("").map((e,i)=>{
                  return <motion.span
                  variants={textVariance}
                  initial="initial"
                  animate={isFocus?"enter":"initial"}
                  transition={{
                    duration:0.3,
                    delay:0.04*i,
                  }}
                  >{e}</motion.span>
                })}
              </div>
                {
                    data.map((e,i)=>{
                        return (
                            <div key={i} onMouseEnter={()=>imgHandeler(i,e.title)} onMouseLeave={()=>imgrmHandeler(i)} className="h-screen">
                                <div className="m-2 flex gap-2 items-center text-xl">
                                    <div className="rounded-full w-4 h-4 bg-black"></div>{e.title}</div>
                                    <div className={`overflow-hidden rounded-3xl imageContainer${i}`}>
                                        <img className={`image${i} object-contain`} src={e.img} alt="" />
                                    </div>
                                <div className="flex items-center gap-5 pt-5">
                                    {
                                        e.btns.map((el,j)=>{
                                            return (
                                                <button className="anibtn hover:text-white p-2 px-3 border-2 border-black rounded-full">{el}</button>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        )
                    })
                }
                <div className="h-[20vh] col-span-2 w-full flex justify-center items-center">
                    <button className="bg-[#212121] flex anibtn text-xl items-center rounded-full text-white p-6 gap-6">
                        view all case studies
                         <div className="p-2 rotate-45 border-[1px] border-black rounded-full mx-2">
                            <FaArrowUpLong className="text-white" />
                         </div>
                         </button>
                </div>
            </div>
        </div>
        </>
     );
}

export default Projects;