import { ListOfProduct } from "./ListOfProduct";
import products from "../../data/product.json"
import { waveBottom, waveTop } from '../../data/styles';


const Product = () => {

   return (
      <div id='wave-container' className="w-full">
         {waveTop}
         <div className='flex flex-col items-center bg-blue-700'>
            <section id="product" className="flex flex-col items-center justify-center gap-8 mt-16 min-h-screen w-3/4 mb-12 lg:mb-0">
               <h2 className="text-6xl">Our Products</h2>
               <p className="text-xl text-slate-400">Some product we have in stock </p>
               <div className="lg:p-12">
                  <article>
                     <ListOfProduct products={products} />
                  </article>
               </div>
            </section>
         </div>
         {waveBottom}
      </div>
   )
}

export { Product }