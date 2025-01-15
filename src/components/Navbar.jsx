export default function Navbar() {
  return (
    <nav className=" navbar w-full flex justify-between py-[2vh] px-[10%]">
      <div className=" navbar-start flex space-x-[10%]">
        <button className="font-medium hover:text-white transition">Home</button>
        <button className="font-medium hover:text-white transition">About</button>
        <button className="font-medium hover:text-white transition">Contact</button>
      </div>

      <button className="navbar-center font-bold text-primary hover:opacity-80 transition">
        Secret Vault
      </button>

      <button className="navbar-end font-medium hover:text-white transition">Log In</button>
    </nav>
  );
}
