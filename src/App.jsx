import { BrowserRouter , Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Product } from './components/products/Product'
import { Welcome } from './components/Welcome'
function App() {

  return (
    <div className="bg-black h-full flex flex-col gap-20">
      <BrowserRouter>
          <Header/>
      </BrowserRouter>
      <Welcome/>
      <Product/>
    </div>
  )
}

export default App
