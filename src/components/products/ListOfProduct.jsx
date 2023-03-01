const ListOfProduct = ({products}) => {
   return (
      <div>
         {products.map(product => (
            <div key={product.id}>
               <img src={product.img} alt={product.id+product.name} />
               <h3>{product.name}</h3>
               <p>{product.description}</p>
               <div>
                  <button>More info</button>
                  <button>Contact</button>
               </div>
            </div>
         ))}
      </div>
   )
}

export {ListOfProduct};