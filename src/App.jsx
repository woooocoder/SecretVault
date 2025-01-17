import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
export default function App() {  
  return (
    <div className='flex flex-col'>
      <Navbar />

      <LandingPage />
    </div>
  )
}


/**
 * <div className="flex flex-col items-center px-[5vw]">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E3E8F7" d="M48.2,-54.6C59.1,-48.2,62.4,-29.9,66.8,-10.9C71.3,8.2,76.9,27.9,68.7,37.4C60.5,46.8,38.5,46.1,20,51.2C1.5,56.3,-13.5,67.4,-25.9,65.4C-38.3,63.4,-48.1,48.4,-51.7,33.9C-55.3,19.3,-52.7,5.3,-52.7,-11.9C-52.8,-29,-55.5,-49.2,-47.1,-56C-38.8,-62.9,-19.4,-56.4,-0.4,-55.9C18.6,-55.5,37.2,-61,48.2,-54.6Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#E7ECFF" d="M33.7,-21.8C47.3,-9.8,64.5,4.4,64.8,19.5C65.1,34.5,48.5,50.4,28.3,61C8.1,71.5,-15.7,76.8,-32.7,68.4C-49.7,60,-59.8,38,-54.2,23.5C-48.7,9,-27.5,2,-15.8,-9.5C-4.2,-21.1,-2.1,-37.2,4,-40.4C10,-43.6,20,-33.8,33.7,-21.8Z" transform="translate(100 100)" />
          </svg> 
      </div>
 */