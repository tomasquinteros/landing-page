import { useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useForm } from "react-hook-form";
const Contact = () => {
   function completed() {
      if (errors.Name?.message || errors.email?.message || errors.textArea?.message) {
         console.log(errors.Name?.message)
         return false
      } else {
         return true
      }
   }
   const BacktoPage= ()=> {
      openModal && completed() ? alert("Completed"): alert("Error")
   }
   const [openModal, setOpenModal] = useState(false);
   const { register, handleSubmit, formState: { errors } } = useForm();

   return (
      <div>
         {
            openModal ? <div className="fixed -z-55 top-0 left-0 min-h-full min-w-full flex justify-center items-center bg-black/75">
               <div className="bg-cyan-100 p-10 border rounded-md text-black flex flex-col gap-8">
                  <button className="text-5xl text-teal-500 ml-auto" onClick={() => { setOpenModal(!openModal) }}>
                     <AiOutlineCloseCircle />
                  </button>
                  <form onSubmit={handleSubmit((data) => console.log(data))}>
                     <ul className="flex gap-8">
                        <div className="flex flex-col gap-8">
                        <li className="flex flex-col">
                           <label className="text-2xl">Name</label>
                           <input
                            className="bg-gray-400" type="text" 
                           {...register("Name",
                              { 
                              required: "Username is required",
                              message: "Username is required"
                              }
                           )
                           }
                           />
                           <span className="text-red-500">{errors.Name?.message}</span>
                        </li>
                        <li className="flex flex-col">
                           <label className="text-2xl">Gmail</label>
                           <input className="bg-gray-400" 
                           type="email"
                              {...register("Email", {required: "Email is    required",
                                 pattern: {
                                          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                          message: "Email is required"
                                       }
                                  }
                                 )
                              }
                           />
                           <span className="text-red-500">{errors.Email?.message}</span>
                        </li>
                        </div>
                        <li>
                           <label className="text-2xl">Message</label>
                           <textarea className="bg-gray-400" 
                              name="" 
                              id="" 
                              cols="30" 
                              rows="10"
                              {...register("textArea",
                                 {required:"Message is required", 
                                 message: "Your comment is empty, write something to be able to sen"
                                 }
                              )
                              }>
                           </textarea>
                           <span className="text-red-500 text-sm block">{errors.textArea?.message}</span>
                        </li>
                     </ul>
                     {completed() ?
                        <input type="submit" value="Send Message" 
                           className="h-10 px-6 font-semibold rounded-md bg-black text-white" 
                           onClick={() => {BacktoPage()}} 
                        /> : console.log("")
                     }
                  </form>
               </div>
            </div> : console.log("Hola")
         }
         {/* {
            completed() && openModal ? <div>
               <h2>Message send exit</h2>
               <button onClick={setOpenModal(!openModal)}>Back to Page</button>
            </div> : console.log("Error")
         } */}
         <h2>Contact</h2>
         <div>
            <p>Tel: +54 2323-2312</p>
            <a href="mailto:example@gmail.com">Gmail</a>
            <a href="https://wa.link/0r0njr">Whatsapp</a>
         </div>
         <div>
            <button onClick={() => { setOpenModal(!openModal) }}>Send Messege</button>
         </div>
      </div>
   )
}

export { Contact }