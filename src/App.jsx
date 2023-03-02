import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Product } from './components/products/Product';
import { Welcome } from './components/Welcome';
import { We } from './components/We';
import { Contact } from './components/Contact/Contact';
import {BiUpArrow} from 'react-icons/bi'
function App() {

  return (
    <div id="top" className="flex flex-col justify-center gap-20 mx-auto">
      <BrowserRouter>
          <Header/>
          <main className='w-3/4 mx-auto flex flex-col gap-36'>
            <Welcome/>
            <Product/>
            <We/>
            <Contact/>
          </main>
      </BrowserRouter>
      <a href='#top' className='z-30 fixed right-4 bottom-4 bg-gray-500 p-2'>
        <BiUpArrow className='text-cyan-400 text-3xl'/>
      </a>
    </div>
  )
}

export default App

