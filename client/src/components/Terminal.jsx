const Terminal = ({ logs }) => {
  return (
    <div className="w-1/2 mx-auto">
      <div className="w-full">
        <div
          className="coding inverse-toggle px-5 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased 
              bg-gray-800  pb-6 pt-4 rounded-lg leading-normal overflow-hidden"
        >
          <div className="top mb-2 flex">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
            <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="mt-4 max-h-96 overflow-auto flex text-green-200">
            <pre>{logs}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
