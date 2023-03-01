import { BrowserRouter , Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Product } from './components/products/Product';
import { Welcome } from './components/Welcome';
import { We } from './components/We';
import { Contact } from './components/Contact';
function App() {

  return (
    <div className="flex flex-col justify-center gap-20 mx-auto">
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
      <main className='w-3/4 mx-auto'>
        <Welcome/>
        <Product/>
        <We/>
        <Contact/>
      </main>
    </div>
  )
}

export default App

