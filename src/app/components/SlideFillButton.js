const SlideFillButton = ({ buttonText, handleClick }) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className="group relative h-8 w-28 overflow-hidden rounded-lg bg-white text-md font-light shadow-lg my-4"
    >
      <div className="absolute inset-0 w-4 bg-zinc-600 transition-all duration-[800ms] group-hover:w-full"></div>
      <span className="relative text-gray-600 group-hover:text-white">
        {buttonText}
      </span>
    </button>
  );
};

export default SlideFillButton;
