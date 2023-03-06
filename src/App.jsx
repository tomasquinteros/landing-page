/* Import Dependencies */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { Error404 } from './components/Error404';
import { Header } from './components/Header';



/* App */
function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App