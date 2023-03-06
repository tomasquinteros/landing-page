/*Import Components */
import { Product } from './products/Product';
import { Welcome } from './Welcome';
import { We } from './We';
import { Contact } from './Contact/Contact';
import { GrLinkTop } from 'react-icons/gr'
import goToTop from './goToTop'

const LandingPage = () => {

  return (
    <div className="flex flex-col justify-center mx-auto">
      <main className='mx-auto flex flex-col items-center md:gap-20'>
        <Welcome />
        <Product />
        <We />
      </main>
      <footer className='w-full'>
        <Contact />
      </footer>
      <a href='#top' onClick={goToTop()} className='z-30 fixed right-4  bottom-4 bg-green-400/50 p-2'>
        <GrLinkTop className=' text-2xl' />
      </a>
    </div>
  )

}

export { LandingPage }