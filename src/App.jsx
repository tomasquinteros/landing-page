/* Import Dependencies */
import { BrowserRouter } from 'react-router-dom';
import { BiUpArrow } from 'react-icons/bi'
import { waveBottom, waveTop } from './data/styles';
/*Import Components */
import { Header } from './components/Header';
import { Product } from './components/products/Product';
import { Welcome } from './components/Welcome';
import { We } from './components/We';
import { Contact } from './components/Contact/Contact';
import { Error404 } from './components/Error404';

/* App */
function App() {

  return (
    <div id="top" className="flex flex-col justify-center mx-auto">
      <Error404/>
      <BrowserRouter>
        <Header />
        <main className='mx-auto flex flex-col items-center md:gap-20'>
          <Welcome />
          <div id='wave-container' className='w-full'>
            {waveTop}
            <div className='flex flex-col items-center bg-blue-700'>
              <Product />
            </div>
            {waveBottom}
          </div>
          <We />
        </main>
        <footer className='w-full'>
          {waveTop}
          <div className='flex flex-col items-center bg-blue-700'>
            <Contact />
          </div>
        </footer>
      </BrowserRouter>
      <a href='#top' className='z-30 fixed right-4 bottom-4 bg-gray-500 p-2'>
        <BiUpArrow className='text-cyan-400 text-3xl' />
      </a>
    </div>
    )
  }

export default App