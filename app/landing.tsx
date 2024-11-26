"use client"
import { motion } from "framer-motion"
import { FaArrowUpLong } from "react-icons/fa6";

function Landing() {
    return ( 
        <>
        <div data-scroll data-scroll-section data-scroll-speed="-.5" className="h-screen w-full p-1">
            <div className="uppercase overflow-hidden lg:mx-20 mx-5 lg:mt-52 mt-32 font-['Founders Grotesk'] lg:text-9xl text-3xl font-extrabold leading-none tracking-tight">
               <div>
                <p className="footerdiv">WE CREATE</p>
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
                <img className="lg:h-[100%] h-[8vh] rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                <p className="footerdiv">EYE-OPENING</p>
               </motion.div>
               <div>
                <p className="footerdiv">PRESENTATIONS</p>
               </div>
            </div>
            <div className="pt-16">
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