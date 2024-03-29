
import { useState } from "react";
import { useForm } from "react-hook-form"
import { Send } from "./Send";
import { motion } from "framer-motion"

const Form = () => {
   const { register, reset, handleSubmit, formState: { errors } } = useForm();
   const [send, setSend] = useState(false)
   function completed() {
      if (errors.Name?.message || errors.Email?.message || errors.textArea?.message) {
         if (send) {
            setSend(!send)
            return false
         }
      }
      else {
         return true
      }
   }
   function Reset() {
      setSend(!send)
      reset(
         {
            Name: null,
            Email: null,
            textArea: null
         })
   
   }

   return (
      <div className="w-5/6">
         <div>
            <form id="form" onSubmit={handleSubmit((data) => console.log(data))} className="md:p-4">
               <p className={!completed() ? "text-red-800 p-2 relative" : "text-slate-600 py-2"}>Complete form for send email.</p>
               <ul className="flex flex-col gap-1 md:gap-4">
                  <li className="flex flex-col md:gap-1 w-full">
                     <label className="text-lg font-medium">NAME</label>
                     <input className="bg-transparent focus:outline-2 outline outline-1 rounded-lg p-2" type="text"
                        {...register("Name",
                           {
                              required: "Name is required",
                              message: "Name is required"
                           }
                        )
                        }
                     />
                     <span className="text-red-600 font-light">{errors.Name?.message}</span>
                  </li>
                  <li className="flex flex-col gap-1 w-full">
                     <label className="text-lg font-medium">EMAIL</label>
                     <input className="bg-transparent focus:outline-2 outline outline-1 rounded-lg p-2" type="email"

                        {...register("Email",
                           {
                              required: "Mail is required",
                              pattern: {
                                 value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                 message: "Email is required"
                              }
                           }
                        )
                        }
                     />
                     <span className="text-red-600 font-light">{errors.Email?.message}</span>
                  </li>
                  <li className="flex flex-col gap-1 w-full">
                     <label className="text-lg font-medium">Message</label>
                     <textarea cols="30" rows="10" className="resize-none bg-transparent focus:outline-2 outline outline-1 rounded-lg p-2"
                        {...register("textArea",
                           {
                              required: "Message is required",
                              message: "Your comment is empty, write something to be able to sen"
                           }
                        )
                        }
                     />
                     <span className="text-red-600 font-light">{errors.textArea?.message}</span>
                  </li>
               </ul>
               <input className="bg-violet-600 border border-violet-600 rounded-md font-bold py-2 px-6 hover:bg-violet-900 mt-2 text-white" type="submit" value="Send" onClick={() => { setSend(true) }} />
            </form>
         </div>
         {send & completed() ?
            <div className="z-50 fixed bg-black/95 top-0 left-0 w-screen h-screen flex justify-center items-center">
               <motion.div className="bg-gray-400/50 p-4 flex flex-col gap-8 rounded-md" initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                     type: "tween"
                  }}>
                  <Send />
                  <button onClick={() => { Reset() }} className="bg-cyan-600 p-2 rounded-lg hover:scale-105 transition-all font-medium"  >Accept</button>
               </motion.div>
            </div>
            : console.log()}
      </div>
   )
}

export { Form }