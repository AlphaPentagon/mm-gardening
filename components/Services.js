import Image from "next/image";

const Services = () => {
  return (
    <section
      className="grid grid-cols-4 w-4/6 mx-auto py-20 col-gap-6 justify-items-center items-center"
      id="services"
    >
      <h2 className="text-primary font-bold text-4xl mb-6 tracking-wider col-span-2 col-start-3 text-center">
        Services
      </h2>

      <ul className="list-disc flex flex-col gap-3 list-inside ">
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>
      <ul className="list-disc flex flex-col gap-3 list-inside">
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum dolor.</li>
      </ul>

      <div className="w-11/12 flex items-center justify-center order-first col-span-2 row-start-2">
        <Image
          src="/images/seeds.jpg"
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

export default Services;
