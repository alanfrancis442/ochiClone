"use client"
import { useState } from "react";
import { easeOut, motion } from "framer-motion"

function Reviews() {
    const [active, setactive] = useState(false)

    // const divVariant = {
    //     active:{

    //     },
    //     inactive:{

    //     }
    // }

    const toggle = ()=>{
        console.log(active)
        setactive(!active)
    }
    return ( 
       <div className="bg-red-600 h-screen mt-[80%] transition-all duration-500">
            <h1 className="text-6xl p-10 tracking-tighter">Client's reviews</h1>
            {/* <hr  className="w-full h-1 bg-black"/> */}

            <div className="p-10 border-t-[1px] border-b-[1px] border-black">
                <div className="flex justify-between">
                    <div>Karman Ventures</div>
                    <div className="flex flex-col gap-10">
                        Services:
                            <div className="flex flex-col gap-5">
                                <div>
                                    btn1
                                </div>
                                <div>
                                    btn1
                                </div>
                            </div>
                        </div>
                    <div className="flex justify-between w-1/2">
                        <div className="flex flex-col gap-10">
                            William Barnes
                                <div className="flex flex-col gap-5">
                                    <div>photo</div>
                                    <div className="w-2/3">content Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, repellat aut quidem iste, veritatis sapiente est id, similique voluptatibus 
                                        laboriosam necessitatibus ipsum dolor dolores. Aliquam, cumque qui! Deserunt, vero neque.</div>
                                </div>
                            </div>
                        <div onClick={toggle}>READ</div>
                    </div>
                </div>
            </div>
         </div>
     );
}

export default Reviews;