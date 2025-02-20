import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col px-[15%] overflow-x-hidden">
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<NoPage />} />
            {/* <Route index path="/" element={<About />} /> */}
            {/* <Route index path="/" element={<Contact />} /> */}
          </Routes>
          
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
