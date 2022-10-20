import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between py-4 px-40 mb-2 mt-4 drop-shadow-md">
      <ul className="flex flex-row justify-between w-1/4">
        <li className="active:underline hover:text-primary hover:underline text-xl">
          <Link href="#home">Home</Link>
        </li>
        <li className="active:underline hover:text-primary hover:underline text-xl">
          <Link href="#about">About</Link>
        </li>
        <li className="active:underline hover:text-primary hover:underline text-xl">
          <Link href="#services">Services</Link>
        </li>
        <li className="active:underline hover:text-primary hover:underline text-xl">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
      <p className="text-2xl text-primary font-semibold">M & M Gardening</p>
    </nav>
  );
};

export default Navbar;
