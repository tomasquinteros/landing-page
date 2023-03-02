import { ListOfProduct } from "./ListOfProduct";
import products from "../../data/product.json"
const Product = () => {
   return (
      <section id="product" className="flex flex-col items-center justify-center gap-8 mt-16 min-h-screen">
         <h2 className="text-6xl">Our Products</h2>
         <p className="text-xl text-slate-400">Some product we have in stock </p>
         <div className="p-12">
            <article>
               <ListOfProduct products={products}/>
            </article>
         </div>
      </section>
   )
}

export {Product}