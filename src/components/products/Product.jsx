import { ListOfProduct } from "./ListOfProduct";
import products from "../../data/product.json"
const Product = () => {
   return (
      <section>
         <h2>Our Products</h2>
         <p>Some product we have in stock </p>
         <div>
            <article>
               <ListOfProduct products={products}/>
            </article>
         </div>
      </section>
   )
}

export {Product}