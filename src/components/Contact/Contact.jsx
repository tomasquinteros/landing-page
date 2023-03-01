import { useEffect, useState } from "react"
import { AiOutlineCloseCircle } from "react-icons/ai"
import { useForm } from "react-hook-form";
import { Form } from "./Form";

const Contact = () => {
   const [openModal, setOpenModal] = useState(false);
   return (
      <div>
         <h2>Contact</h2>
         <div>
            <p>Tel: +54 2323-2312</p>
            <a href="mailto:example@gmail.com">Gmail</a>
            <a href="https://wa.link/0r0njr">Whatsapp</a>
         </div>
         <div>
            <button onClick={() => { setOpenModal(!openModal) }}>Send Messege</button>
         </div>
         {openModal ? 
         <div>
            <button onClick={()=> {setOpenModal(!openModal)}}>
               <AiOutlineCloseCircle/>
            </button>
            <Form/> 
         </div>
         : null}
      </div>
   )
}

export { Contact }

