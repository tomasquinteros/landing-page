
import { useState } from "react";
import { useForm } from "react-hook-form"
import { Send } from "./Send";

const Form = () =>{ 
   const {register, reset,handleSubmit, formState : {errors}} = useForm();
   const [send, setSend] = useState(false)

   function completed() {
      if (errors.Name?.message || errors.Email?.message || errors.textarea?.message & send) {
         return false
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
            textarea: null
         })
      
   }
   return (
      <div>
         <div>
            <form id="form" onSubmit={handleSubmit((data) => console.log(data))}>
               <ul>
                  <li>
                     <label></label>
                     <input type="text" 
                        {...register( "Name",
                              {
                                 required : "Name is required",
                                 message : "Name is required"
                              }
                           )
                        }
                     />
                     <span>{errors.Name?.message}</span>
                  </li>
                  <li>
                     <label></label>
                     <input type="email" 

                        {...register("Email",
                              {
                                 required : "Mail is required",
                                 pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Email is required"
                                 }
                              }
                           )
                        }
                     />
                     <span>{errors.Email?.message}</span>
                  </li>
                  <li>
                     <label></label>
                     <textarea cols="30" rows="10" 
                        {...register("textarea", 
                              {
                                 required: "Message is required",
                                 message: "Your comment is empty, write something to be able to sen"
                              }
                           )
                        }
                     />
                     <span>{errors.textarea?.message}</span>
                  </li>
               </ul>
               <input type="submit" onClick={()=>{setSend(true)}}/>
            </form>
         </div>
         { send & completed() ? <div><Send/><button onClick={()=> {Reset()}}>Accpet</button></div> : console.log("")}
      </div>
   )
}

export {Form}