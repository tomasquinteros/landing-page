import {ButtonContact} from './ButtonContact'
import { Link } from 'react-router-dom';
const ListOfProduct = ({ products }) => {
   return (
      <div className="flex flex-col lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-12">
         {products.map(({ id, image, info, link, name }) => (
            <div key={id} className="flex flex-col gap-4 shadow-2xl shadow-slate-700 items-center justify-center rounded-md p-4 hover:scale-105 transition duration-500 bg-slate-800">
               <div className="h-3/4">
                  <img src={image} alt={id + name} className="w-3/4 max-h-64 m-auto" />
               </div>
               <h3 className="text-xl">{name}</h3>
               <p className="font-light lg:text-center">{info}</p>
               <a className="border p-3 w-full text-center rounded-md bg-red-500 border-red-500  hover:border-violet-600 hover:bg-violet-600" href={link} target="_blank">More info</a>
            </div>
         ))}
      </div>
   )
}
export { ListOfProduct };
