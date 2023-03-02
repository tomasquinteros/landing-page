import { useEffect, useState } from "react"
import { AiOutlineCloseCircle, AiOutlineWhatsApp, AiFillPhone, AiFillMail } from "react-icons/ai"
import { useForm } from "react-hook-form";
import { Form } from "./Form";

const Contact = () => {
   const [openModal, setOpenModal] = useState(false);
   return (
      <div id="Contact" className="flex flex-col gap-5">
         <h2 className="text-6xl font-medium text-cyan-600 border-t p-8">Contact</h2>
         <div className="flex items-center justify-between gap-20 p-8">
            <div className="flex flex-col gap-4">
               <div className="flex gap-2 text-xl items-center">
                  <AiFillPhone/>
                  <p>Tel: +54 2323-2312</p>
               </div>
               <div className="flex gap-2 text-xl items-center">
                  <AiFillMail/>
                  <a href="mailto:example@gmail.com">Gmail</a>
               </div>
               <div className="flex gap-2 text-xl items-center">
                  <AiOutlineWhatsApp/>
                  <a href="https://wa.link/0r0njr">Whatsapp</a>
               </div>
            </div>
            <div>
               <button className="btn bg-slate-800 p-6 rounded-md hover:scale-125 transition-all" onClick={() => { setOpenModal(!openModal) }}>Send Messege</button>
            </div>
         </div>
         {openModal ? 
         <div className="z-40 bg-black/95 fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-between bg-gray-700 p-2 rounded-sm">
               <button  className="ml-auto text-cyan-400" onClick={()=> {setOpenModal(!openModal)}}>
                  <AiOutlineCloseCircle className="text-5xl relative top-0"/>
               </button>
               <Form/> 
            </div>
         </div>
         : null}
      </div>
   )
}

export { Contact }

