"use client"
import { motion } from "framer-motion"
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
    return ( 
        <>
        <div className="h-screen w-full p-1">
            <div className="uppercase overflow-hidden mx-20 mt-52 font-['Founders Grotesk'] text-9xl tracking-tighter font-bold">
               <div>
                <p>WE CREATE</p>
               </div>

               <motion.div
               initial={{
                x:'-17%',
               }}
               animate={{
                x:'0',
               }}
               transition={{
                ease:"easeInOut",
                duration:3
               }}
               className="flex items-center overflow-hidden">
                <img className="h-[100%] rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                <p className="">EYE-OPENING</p>
               </motion.div>
               <div>
                <p>PRESENTATIONS</p>
               </div>
            </div>
            <div className="pt-40">
                <hr className="w-full h-[1.5px] bg-black" />
                <div className="flex items-center px-20 justify-between py-10">
                    <div>
                    For public and private companies
                    </div>
                    <div>
                        From the first pitch to IPO
                    </div>
                    <div className="flex items-center">
                        <div className="anibtn hover:text-white capitalize p-3 border-[1px] border-black rounded-full">
                            start the project
                        </div>
                        <div className="p-4 rotate-45 border-[1px] border-black rounded-full mx-2">
                            <FaArrowUpLong />
                        </div>
                    </div>
                </div>
            {/* <div>
            <p className="mx-[50%] text-lg font-medium  pt-6">Scroll down</p>
            </div> */}
            </div>
        </div>
        </>
     );
}

export default Landing;