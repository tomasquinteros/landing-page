import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
   const styleNav = "py-8 flex justify-around fixed items-center transition duration-1000 all z-40 top-0 left-0 min-w-full";
   const active = styleNav + " bg-black";
   const navBarStay = styleNav + " bg-transparent"; 
   const [navBar, setNavBar] = useState(false);
   const changeBg = () => {
      if (window.scrollY > 180) {
         setNavBar(true);
      }else {
         setNavBar(false)
      }
   }
   window.addEventListener("scroll", changeBg);

   return (
      <div className="mb-32">
         <nav 
            className={navBar ? active : navBarStay}
         >
         <NavLink to="/" className="text-3xl">Tecnologies Store</NavLink>
         <div className="flex gap-10 ">
            <NavLink to="/" className="text-xl text-cyan-300 hover:text-neutral-200">We</NavLink>
            <NavLink to="/" className="text-xl text-cyan-300 hover:text-neutral-200">Product</NavLink>
            <NavLink to="/" className="text-xl text-cyan-300 hover:text-neutral-200">Contact</NavLink>
            </div>
         </nav>
      </div>
   )

}

export {Header}