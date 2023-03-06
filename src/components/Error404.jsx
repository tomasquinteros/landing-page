import { Link } from "react-router-dom"
import {FaHome} from "react-icons/fa"

export const Error404 = () => {
   return (
      <div className="lg:w-3/4 flex flex-col justify-center items-center mx-auto gap-8">
         <h1 className="text-center text-6xl lg:text-8xl">PAGE NOT FOUND</h1>
         <Link className="flex items-center gap-2 text-xl" to="/"> 
            <FaHome/>
            BACK TO PAGE
         </Link>
      </div>
   )
}