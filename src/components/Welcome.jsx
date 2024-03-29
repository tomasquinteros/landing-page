import image from "../assets/graphic-card.png"
import { ButtonContact } from "./products/ButtonContact";

import { motion } from 'framer-motion';

const Welcome = () => {
   return (
      <section id="#" className="flex flex-col justify-center gap-8 md:gap-32 w-3/4">
         <motion.h1
            className="text-left text-4xl lg:text-7xl text-violet-400 font-serif"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring" }}
         >Welcome to... <br />
            <strong className="text-red-500 md:text-8xl lg:text-9xl">Technology <br />Store</strong>
         </motion.h1>
         <div className="flex flex-col xl:flex-row gap-32">
            <div className="flex flex-col justify-around gap-8">
               <h2 className="text-2xl md:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus non.</h2>
               <div className="flex flex-col gap-16">
                  <p className="text-lg font-serif text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita sit voluptatibus ipsam accusantium mollitia ab fuga nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deleniti? Saepe excepturi explicabo provident molestiae vel a quod accusantium, odit nam quia velit ut praesentium harum distinctio? Obcaecati, recusandae corrupti?</p>
                  <div>
                     <ButtonContact/>
                  </div>
               </div>
            </div>
            <img src={image} className="hidden lg:block w-3/6 xl:ml-auto m-auto hover:scale-125 transition-all duration-300" />
         </div>
      </section>
   )
}
export { Welcome }