import { AiOutlineWhatsApp, AiFillPhone, AiFillMail } from 'react-icons/ai'

const FastContact = () => {
   return (
      <div>
         <div className="flex gap-2 text-md md:text-xl items-center">
            <AiFillPhone />
            <p>Tel: +54 2323-2312</p>
         </div>
         <div className="flex gap-2 text-md md:text-xl items-center">
            <AiFillMail />
            <a href="mailto:example@gmail.com">Gmail</a>
         </div>
         <div className="flex gap-2 text-md md:text-xl items-center">
            <AiOutlineWhatsApp />
            <a href="https://wa.link/0r0njr">Whatsapp</a>
         </div>
      </div>
   )
}

export { FastContact }