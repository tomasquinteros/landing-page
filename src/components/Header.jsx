import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from 'react-icons/fa';
import { stylesNavBar } from "../data/styles";

const Header = () => {

   const [navBar, setNavBar] = useState(false);
   const [open, setOpen] = useState(false)
   const changeBg = () => {
      if (window.scrollY > 180) {
         setNavBar(true);
      } else {
         setNavBar(false)
      }
   }
   window.addEventListener("scroll", changeBg);
   return (
      <div className="mb-32 md:mb-64">
         <nav
            className={navBar ? `${stylesNavBar.styleNav} ${stylesNavBar.active}` : ` ${stylesNavBar.styleNav} ${stylesNavBar.navBarStay}`}
         >
            <Link to="#" className="text-2xl md:text-4xl font-medium">Tecnologies Store</Link>

            <div className={open ? stylesNavBar.openNav : stylesNavBar.close}>
               <div className="top-10 right-10 fixed">
                  <button className="lg:hidden text-4xl" onClick={() => setOpen(false)}>
                     <FaTimes />
                  </button>
               </div>
               <Link onClick={() => setOpen(false)} to="#Product" className={stylesNavBar.styleLinks}>Product</Link>
               <Link onClick={() => setOpen(false)} to="#We" className={stylesNavBar.styleLinks}>We</Link>
               <Link onClick={() => setOpen(false)} to="#Contact" className={stylesNavBar.styleLinks}>Contact</Link>
            </div>
            <button className="lg:hidden text-2xl" onClick={() => setOpen(true)}>
               <FaBars />
            </button>
         </nav>
      </div>
   )
}

export { Header }