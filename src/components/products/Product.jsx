import { ListOfProduct } from "./ListOfProduct";
import products from "../../data/product.json"
import { waveBottom, waveTop } from '../../data/styles';


const Product = () => {

   return (
      <div id='wave-container' className="w-full">
         {waveTop}
         <div className='flex flex-col items-center bg-white'>
            <section id="Product" className="flex flex-col items-center justify-center gap-8 mt-16 min-h-screen w-3/4 mb-12 lg:mb-0">
               <h2 className=" text-4xl md:text-8xl font-bold font-mono text-violet-600">Our Products</h2>
               <p className="text-2xl text-slate-600">Some product we have in stock </p>
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