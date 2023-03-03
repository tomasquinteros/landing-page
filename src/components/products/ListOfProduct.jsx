import { HashLink as Link } from "react-router-hash-link";

const ListOfProduct = ({ products }) => {
   return (
      <div className="flex flex-col lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-12">
         {products.map(({ id, image, info, link, name }) => (
            <div key={id} className="flex flex-col gap-4 shadow-2xl items-center justify-center rounded-md p-4 hover:scale-105 transition bg-slate-800">
               <div className="h-3/4">
                  <img src={image} alt={id + name} className="w-3/4 max-h-64 m-auto" />
               </div>
               <h3 className="text-xl">{name}</h3>
               <p className="font-light lg:text-center">{info}</p>
               <div className="flex gap-4 items-center justify-between flex-col md:flex-row">
                  <a className="bg-gray-900 p-3 rounded-md hover:bg-transparent hover:border" href={link} target="_blank">More info</a>
                  <Link className="border p-3 rounded-md hover:border-cyan-300 hover:text-cyan-300" to="#Contact">Contact</Link>
               </div>
            </div>
         ))}
      </div>
   )
}
export { ListOfProduct };
