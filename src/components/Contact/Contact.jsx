import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { Form } from "./Form";
import { motion } from "framer-motion"
import {FastContact} from "./FastContact";
import { waveTop } from "../../data/styles";

const Contact = () => {
   const [openModal, setOpenModal] = useState(false);
   return (
      <div className="w-full">
         {waveTop}
         <div className='flex flex-col items-center bg-white text-black'>
            <div id="Contact" className="flex flex-col gap-5 w-3/4 mb-12">
               <h2 className="text-4xl md:text-8xl font-medium font-mono text-red-500 border-b-4 border-red-500 p-2">Contact</h2>
               <div className="flex flex-col md:flex-row items-center justify-between gap-20 p-8">
                  <FastContact/>
                  <div className="flex flex-col gap-4">
                     <button 
                        className="btn bg-violet-900 text-white md:text-2xl p-6 rounded-md hover:scale-105 transition-all duration-500 shadow-2xl"
                        onClick={() => { setOpenModal(!openModal) }}
                        >
                        Send Messege
                     </button>
                  </div>
               </div>
               {openModal ?
                  <div className="z-40 bg-black/95 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
                     <motion.div 
                        className="flex flex-col items-center justify-between bg-white shadow-2xl shadow-gray-900 p-2 rounded-lg w-3/4 lg:w-2/4 md:full"
                        initial={{ scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring" }}>
                        <button className="ml-auto text-violet-400" onClick={() => { setOpenModal(!openModal) }}>
                           <AiOutlineCloseCircle className="text-3xl md:text-5xl relative top-0" />
                        </button>
                        <Form />
                     </motion.div>
                  </div>
                  : null}
            </div>
         </div>
      </div>
   )
}

export { Contact }

