import { useState } from "react";
import { NavLink } from "react-router-dom";



const Header = () => {
   const active = "bg-sky-300"
   const navBarStay = "bg-transparent"
   const [navBar, setNavBar] = useState(false);
   const changeBg = () => {
      if (window.scrollY > 100) {
         setNavBar(true);
      }
      window.addEventListener("scroll", changeBg);
   }
   const changeBackground = navBar ? active : navBarStay;

   const styleHeader = "py-4 flex justify-around items-center min-w-max"
   return (
      <nav 
      className={`${styleHeader} ${changeBackground}`}
      >
         <NavLink to="/" className="text-3xl">Tecnologies Store</NavLink>
         <div className="flex gap-10 ">
            <NavLink to="/" className="text-xl text-cyan-300 hover:text-neutral-200">We</NavLink>
            <NavLink to="/" className="text-xl text-cyan-300 hover:text-neutral-200">Product</NavLink>
            <NavLink to="/" className="text-xl text-cyan-300 hover:text-neutral-200">Contact</NavLink>
         </div>
      </nav>
   )

}

export {Header}