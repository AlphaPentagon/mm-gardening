import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center bg-secondary bg-opacity-60 py-14 mb-8"
    >
      <div className=" rounded-sm brightness-95 drop-shadow-lg relative bg-[url('/images/planter.jpg')] w-5/6 h-[750px] bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center">
        <div className="bg-black w-3/6 h-3/6 grid items-center bg-opacity-80 drop-shadow-md rounded-sm">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-secondary text-opacity-90 brightness-110 text-6xl font-bold mb-8 tracking-wider">
              M & M Gardening
            </h1>
            <p className="text-white text-2xl mb-10 tracking-wide">
              Your local gardeners
            </p>
            <a href="#contact">
              <Button text="Contact" />
            </a>
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
