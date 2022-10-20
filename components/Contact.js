import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = new FormData(e.target);
    const formProps = Object.fromEntries(formValues);
    console.log(formProps);
    setFormData(formProps);
  };

  return (
    <section
      className="flex flex-col gap-4 justify-center items-center w-4/6 mx-auto py-20"
      id="contact"
    >
      <div className="flex flex-col justify-center items-center mb-6">
        <h2 className="text-primary font-bold text-4xl mb-10 tracking-wider">
          Contact
        </h2>
        <div className="flex flex-col gap-2">
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
      </div>
      <form
        className="w-2/4 grid grid-cols-12 grid-rows-6 gap-y-4 justify-center items-center pr-16"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="mr-4">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Type your name..."
          className="col-start-3 col-span-10"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Type your email..."
          className="col-start-3 col-span-10"
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          placeholder="Type your message..."
          className="col-start-3 col-span-10  row-start-3 row-span-3 h-full"
          required
        />
        <button
          type="submit"
          className="col-span-10 col-start-3 row-start-6 drop-shadow-lg brightness-110 bg-primary text-2xl text-white px-8 py-3 rounded-md hover:bg-opacity-90 tracking-wider"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
