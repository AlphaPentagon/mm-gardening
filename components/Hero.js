import Image from "next/image";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center bg-secondary bg-opacity-60 py-14">
      <div className=" rounded-sm brightness-95 drop-shadow-lg relative bg-[url('/images/planter.jpg')] w-5/6 h-[750px] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div className="bg-black p-12 bg-opacity-80 drop-shadow-md rounded-sm">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-secondary text-opacity-90 brightness-110 text-7xl font-bold mb-8 tracking-wider">
              M & M Gardening
            </h1>
            <p className="text-white text-2xl mb-10 tracking-wide">
              Your local gardeners
            </p>
            <Button text="Contact" />
          </div>
        </div>
      </div>
      {/* <FontAwesomeIcon
        icon={faAngleDown}
        className="w-32 hover:cursor-pointer z-10 absolute bottom-0"
      /> */}
    </section>
  );
};

export default Hero;
