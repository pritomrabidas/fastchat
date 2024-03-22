const RequestItem = () => {
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src="pritom101.jpg"
        alt="pritom"
        className=" w-16 h-16 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl">Pritom Rabidas</p>
      <div className="flex flex-col ml-auto mr-1 gap-1">
        <button className=" font-normal text-lg py-1 px-3 rounded font-mono bg-slate-900 text-white hover:bg-gray-400 hover:text-black">confirm</button>
        <button className="font-normal text-lg py-1 px-3 rounded font-mono text-black hover:bg-red-500 hover:text-white">cancel</button>
      </div>
    </div>
  );
};

export default RequestItem;
