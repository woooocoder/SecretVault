import Footer from './components/Footer'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
export default function App() {  
  return (
    <>
      <Navbar /> 

    <div className='flex flex-col px-[15%] overflow-x-hidden'>
      <LandingPage />
    </div>
      <Footer />
    </>
  )
}