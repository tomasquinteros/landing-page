import { HashLink as Link } from "react-router-hash-link";

const ListOfProduct = ({products}) => {
   return (
      <div className="grid grid-cols-3 gap-12 flex-wrap">
         {products.map(product => (
            <div key={product.id} className="flex flex-col justify-center items-center gap-4 border border-slate-900 rounded-md p-4 hover:scale-110 transition bg-slate-800">
               <img src={product.img} alt={product.id+product.name} className="w-3/4"/>
               <h3 className="text-xl">{product.name}</h3>
               <p>{product.description}</p>
               <div className="flex flex-col gap-4 text-center">
                  <a className="bg-gray-900 p-3 rounded-md" href={product.link}>More info</a>
                  <Link className="border p-3 rounded-md" to="#Contact">Contact</Link>
               </div>
            </div>
         ))}
      </div>
   )
} 
export {ListOfProduct};