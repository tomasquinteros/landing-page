import { Send } from "./Send"

export function ContactSend () {
   return (

      
      <div className="z-50 fixed bg-black/95 top-0 left-0 w-screen h-screen flex justify-center items-center">
               <motion.div className="bg-gray-400/50 p-4 flex flex-col gap-8 rounded-md" initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                     type: "tween"
                  }}>
                  <Send />
                  <button onClick={() => { Reset() }} className="bg-cyan-600 p-2 rounded-lg hover:scale-105 transition-all font-medium"  >Accept</button>
               </motion.div>
            </div>
   )
}