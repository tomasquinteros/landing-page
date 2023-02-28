import image from "../assets/graphicCard-image.png"

const Welcome = () => {
   return (
      <section className="flex flex-col justify-center items-center">
         <h1>Welcome to Tecnologies Store</h1>
         <div>
            <div>
               <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus non, dolores architecto maiores amet ipsam ratione laborum ex ad modi possimus? Optio architecto quam dolores sapiente, aliquid illum esse.</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste expedita sit voluptatibus ipsam accusantium mollitia ab fuga nobis.</p>
               <div>
                  <button className="h-10 px-6 rounded-md border border-slate-200 text-cyan-200" type="button">Contact</button>
               </div>
            </div>
            <img src={image} className="w-3/6"/>
         </div>
      </section>
   )
}
export {Welcome}