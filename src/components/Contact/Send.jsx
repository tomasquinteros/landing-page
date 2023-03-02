import {AiFillCheckSquare} from "react-icons/ai"

const Send = ()=> {
   return (
      <div className="flex flex-col items-center justify-center gap-2">
         <AiFillCheckSquare className="text-9xl m-auto text-green-400"/>
            <h2 className="text-3xl">Send Email!</h2> 
            <p className="text-xl font-light text-green-400">Thank you for your trust</p>
      </div>
   )
}

export {Send}