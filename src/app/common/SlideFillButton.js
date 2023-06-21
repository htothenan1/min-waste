const SlideFillButton = ({ buttonText, handleClick }) => {
  return (
    <button
      type="submit"
      onClick={handleClick}
      className="group relative h-8 w-28 overflow-hidden rounded-lg bg-white text-sm shadow-lg"
    >
      <div className="absolute inset-0 w-4 bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200 transition-all duration-700 group-hover:w-full"></div>
      <span className="relative text-gray-500 group-hover:text-white">
        {buttonText}
      </span>
    </button>
  );
};

export default SlideFillButton;
