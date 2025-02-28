import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="navbar w-full flex justify-between py-[2vh] lg:px-[15%] md:px-[10%]">
      <div className=" navbar-start w-min flex space-x-[30%]">
        <a href='/' className="font-medium hover:text-white transition">Home</a>
        <a href='/about' className="font-medium hover:text-white transition">About</a>
        <a href='/contact' className="font-medium hover:text-white transition">Contact</a>
      </div>

      <a 
        href='/'
        className="navbar-center w-min text-nowrap font-bold text-primary hover:opacity-80 transition">
        Secret Vault
      </a>

      <button className="navbar-end font-medium transition bg-[#111B47] text-nowrap text-white hover:text-inherit px-[2vw] py-[1vh] rounded-md w-min"
      onClick={() => navigate('/login')}>Log In</button>
    </nav>
  );
}
