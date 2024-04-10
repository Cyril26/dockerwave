const Loader = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-5">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 backdrop-blur-md"></div>
      <div
        className="w-12 h-12 rounded-full animate-spin
                border-2 border-solid border-blue-500 border-t-transparent"
      ></div>
    </div>
  );
};

export default Loader;
