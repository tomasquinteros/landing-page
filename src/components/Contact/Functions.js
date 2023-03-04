export function completed(erros, send) {
   if (errors.Name?.message || errors.Email?.message || errors.textArea?.message) {
      if (send) {
         setSend(!send)
         return false
      }
   }
   else {
      return true
   }
}

export   function Reset() {
      setSend(!send)
      reset(
         {
            Name: null,
            Email: null,
            textArea: null
         })
   
   }