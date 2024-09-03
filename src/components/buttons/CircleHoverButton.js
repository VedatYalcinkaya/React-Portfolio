

const CircleHoverButton = ({text}) => {
    return(
        <button className="btn overflow-hidden relative bg-buttonPrimary text-xl text-white py-4 px-4 rounded-xl font-primary uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-secondary before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-secondary hover:before:animate-ping transition-all duration-300 active:scale-75 transition-transform">
        <span className="relative">{text}</span>
      </button>
    );
};

export default CircleHoverButton;