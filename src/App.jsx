import { BrowserRouter, Route , Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Product } from './components/products/Product';
import { Welcome } from './components/Welcome';
import { We } from './components/We';
import { Contact } from './components/Contact/Contact';
function App() {

  return (
    <div className="flex flex-col justify-center gap-20 mx-auto">
      <BrowserRouter>
          <Header/>
          <main className='w-3/4 mx-auto flex flex-col gap-36'>
            <Welcome/>
            <Product/>
            <We/>
            <Contact/>
          </main>
      </BrowserRouter>
      
    </div>
  )
}

export default App

