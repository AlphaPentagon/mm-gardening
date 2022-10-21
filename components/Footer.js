import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary bg-opacity-60 py-4">
      <div className="flex justify-around items-center mx-auto">
        <div className="flex flex-col gap-2 w-1/4">
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-5"
            ></FontAwesomeIcon>
            <p>m&m@gardening.com</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="w-5"></FontAwesomeIcon>
            <p>01297 123456</p>
          </div>
        </div>
        <div className="w-2/4 flex flex-col items-center justify-center gap-2">
          <p>&copy; Copyright M & M Gardening 2022</p>
          <p className="text-sm">
            Website created by{" "}
            <a
              href="https://craig-summers-dev.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:underline"
            >
              Craig Summers
            </a>
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 w-1/4">
          <li className="active:underline hover:text-primary hover:underline text-sm text-center">
            <Link href="#home">Home</Link>
          </li>
          <li className="active:underline hover:text-primary hover:underline text-sm text-center">
            <Link href="#about">About</Link>
          </li>
          <li className="active:underline hover:text-primary hover:underline text-sm text-center">
            <Link href="#services">Services</Link>
          </li>
          <li className="active:underline hover:text-primary hover:underline text-sm text-center">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
