import inspired from "../assets/inspired.jpeg"

const We = () =>{
   return (
      <div id="We" className="flex flex-col gap-20">
         <h2 className="text-6xl w-3/4 border-b p-4">We</h2>
         <div className="text-xl font-light w-3/4">
         <p>We are a company dedicated to Technologies, where we try to help all people. This website is a test and we accept your criticism and opinions.</p>
         <p>We have been in the industry since 2020 offering our products</p>
         </div>
         <div className="flex flex-col gap-3">
         <h2 className="text-2xl">What do we aspire to?</h2>
         <div className="flex items-center justify-between gap-4">
         <p className="text-lg font-extralight w-2/4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit accusamus in dolor. Mollitia quidem distinctio ex autem quisquam provident illo numquam molestias? Minima, sapiente porro. Adipisci dolores debitis nihil voluptates.
         Rerum debitis provident fugit optio accusantium laboriosam nemo odio ducimus dolor cupiditate at explicabo, labore praesentium expedita necessitatibus quibusdam quis perferendis exercitationem. Expedita ex corrupti deleniti? Tempore blanditiis cupiditate sapiente?
         Aperiam nemo odio modi fugiat! Mollitia laboriosam dolorem quam reprehenderit repellendus molestias quod, et beatae enim possimus saepe. Optio earum expedita voluptatem, repellat dignissimos provident deleniti illo. Natus, cumque laudantium.</p>
         <img src={inspired} alt="image-insipired" className="w-4/12"/>
         </div>
         </div>
      </div>
   )
};

export {We};