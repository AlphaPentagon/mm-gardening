import Image from "next/image";
import Button from "./Button.js";

const About = () => {
  return (
    <section className="grid grid-cols-2 w-4/6 mx-auto py-20 gap-8" id="about">
      <article className="flex flex-col justify-center items-center gap-4 py-10 px-8">
        <h2 className="text-primary font-bold text-4xl mb-6 tracking-wider">
          About
        </h2>
        <p className="text-center">
          <span className="text-lg font-semibold">Lorem ipsum dolor</span> sit
          amet consectetur adipisicing elit. Voluptates, voluptas? Eaque nisi
          incidunt error tempora dolorem facere, nam voluptas, possimus qui eius
          reprehenderit, ab temporibus beatae? Ullam eius impedit amet.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum odio
          nihil dignissimos nam, culpa, cum laborum accusamus laboriosam
          repellat, itaque velit natus ab illo eaque maiores vel facilis placeat
          nobis.
        </p>
        <p className="text-center mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum odio
          nihil dignissimos nam, culpa, cum laborum accusamus laboriosam
          repellat, itaque velit natus ab illo eaque maiores vel facilis placeat
          nobis.
        </p>
      </article>
      <div className="w-11/12 flex items-center justify-center">
        <Image
          src="/images/mm.jpg"
          alt=""
          width="4096px"
          height="2304px"
          className="drop-shadow-lg rounded-sm"
        />
      </div>
      {/* <div className="col-span-2 mx-auto">
        <Button text="Contact" />
      </div> */}
    </section>
  );
};

export default About;
