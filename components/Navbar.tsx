import Image from "next/image";

import "@/css/navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="navbar-logo">
        <Image src="/logo.png" width={60} height={60} alt="PokeBook Logo" />
        <p>PokeBook</p>
      </div>
    </div>
  );
};

export default Navbar;