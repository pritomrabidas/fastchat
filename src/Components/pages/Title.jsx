import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSearch } from "react-icons/lu";
const Title = ({heading}) => {
  return (
    <div className="bg-gray-300 ">
      <div className="flex justify-between items-center p-4 font-mono">
        <h2 className=" text-3xl mx-3 font-semibold text-black">{heading}</h2>
        <BsThreeDotsVertical className=" text-2xl " />
      </div>
      <div className="flex px-3 py-3 mx-6 mb-4 items-center gap-3 border-2 rounded-lg justify-between">
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none bg-gray-300 text-lg font-serif"
        />
        <LuSearch className="text-3xl mr-8" />
      </div>
    </div>
  );
};

export default Title;
