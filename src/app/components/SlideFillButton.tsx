type ButtonTextProps = {
  buttonText: String;
};

const SlideFillButton = ({ buttonText }: ButtonTextProps) => {
  return (
    <button
      type="submit"
      className="group relative h-8 w-28 overflow-hidden rounded-lg bg-white text-md font-extralight shadow-lg m-2"
    >
      <div className="absolute inset-0 w-4 bg-zinc-600 transition-all duration-[800ms] group-hover:w-full"></div>
      <span className="relative text-gray-600 group-hover:text-white">
        {buttonText}
      </span>
    </button>
  );
};

export default SlideFillButton;
