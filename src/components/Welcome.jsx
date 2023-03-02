import image from "../assets/graphic-card.png"
import { HashLink as Link } from "react-router-hash-link";

const Welcome = () => {
   return (
      <section id="#" className="flex flex-col justify-center gap-32">
         <h1 className="text-7xl">Welcome to <br /><strong className="text-cyan-700 text-9xl drop-shadow-2xl">Tecnologies <br/> Store</strong></h1>
         <div className="flex gap-x-32">
            <div className="flex flex-col justify-around">
               <h2 className="text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus non.</h2>
               <div className="flex flex-col gap-16">
               <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita sit voluptatibus ipsam accusantium mollitia ab fuga nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, deleniti? Saepe excepturi explicabo provident molestiae vel a quod accusantium, odit nam quia velit ut praesentium harum distinctio? Obcaecati, recusandae corrupti?</p>
               <div className="mx-auto">
                  <button className="px-8 text-xl h-10 rounded-md border border-slate-200 text-cyan-200 hover:scale-125 hover:bg-cyan-800 hover:text-white transition-all">
                     <Link  to="#Contact">Contact</Link>
                  </button>
               </div>
               </div>
            </div>
            <img src={image} className="w-3/6 ml-auto hover:scale-125 transition-all"/>
         </div>
      </section>
   )
}
export {Welcome}