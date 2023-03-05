/* Import Dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BiUpArrow } from 'react-icons/bi'

/*Import Components */
import { Header } from './components/Header';
import { Product } from './components/products/Product';
import { Welcome } from './components/Welcome';
import { We } from './components/We';
import { Contact } from './components/Contact/Contact';


/* App */
function App() {

  return (
    <div id="top" className="flex flex-col justify-center mx-auto">
      <BrowserRouter>
        <Header />
        <main className='mx-auto flex flex-col items-center md:gap-20'>
          <Welcome />
          <Product/>
          <We />
        </main>
        <footer className='w-full'>
            <Contact />
        </footer>
      </BrowserRouter>
      <a href='#top' className='z-30 fixed right-4 bottom-4 bg-gray-500 p-2'>
        <BiUpArrow className='text-cyan-400 text-3xl' />
      </a>
    </div>
    )
  }

export default App