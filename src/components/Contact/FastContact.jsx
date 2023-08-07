import { AiOutlineWhatsApp, AiFillPhone, AiFillMail } from 'react-icons/ai'

const FastContact = () => {
   const styleFastContact = 'flex gap-2 text-md md:text-2xl items-center'
   return (
      <div className='flex flex-col gap-2'>
         <div className={styleFastContact}>
            <AiFillPhone />
            <p>Tel: +54 2323-2312</p>
         </div>
         <div className={styleFastContact}>
            <AiFillMail />
            <a href="mailto:example@gmail.com">Gmail</a>
         </div>
         <div className={styleFastContact}>
            <AiOutlineWhatsApp />
            <a href="https://wa.link/0r0njr">Whatsapp</a>
         </div>
      </div>
   )
}

export { FastContact }