"use client";
import { motion } from "framer-motion";
function Scroller() {
  return (
    <>
      <div className="bg-[#004D43] rounded-t-xl py-32 mt-[10%]">
        <div className="overflow-hidden flex border-t-[1px] border-b-[1px] p-4 border-white">
          {[0, 0, 0, 0, 0].map((e) => {
            return (
              <motion.div
                animate={{
                  x: "-100%",
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="font-['Founders Grotesk'] tracking-tighter text-nowrap font-extrabold text-white text-[24rem]"
              >
                WE ARE OCHI
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Scroller;
