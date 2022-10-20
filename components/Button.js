const Button = ({ text }) => {
  return (
    <button className="drop-shadow-lg brightness-110 bg-primary text-2xl text-white px-8 py-3 rounded-md hover:bg-opacity-90 tracking-wider">
      {text}
    </button>
  );
};

export default Button;
