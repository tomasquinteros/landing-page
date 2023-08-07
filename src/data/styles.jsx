const stylesNavBar = {
   styleNav: "p-8 lg:px-28 flex justify-between fixed items-center transition duration-300 all z-40 top-0 left-0 min-w-full",
   active: "bg-black",
   navBarStay: "bg-transparent",
   close: "hidden lg:flex justift-center items-center  lg:gap-20",
   openNav: "flex flex-col justify-center items-center gap-20 bg-black  fixed top-0 left-0 w-full h-full",
   styleLinks: "lg:text-xl text-4xl  text-violet-400 font-medium hover:text-neutral-200"
}

const waveTop = <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,208C672,224,768,224,864,197.3C960,171,1056,117,1152,106.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

const waveBottom = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,32L40,53.3C80,75,160,117,240,112C320,107,400,53,480,80C560,107,640,213,720,229.3C800,245,880,171,960,128C1040,85,1120,75,1200,69.3C1280,64,1360,64,1400,64L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>


export { stylesNavBar, waveBottom, waveTop }