import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
const People = () => {
  return (
    <div className="container mx-auto flex justify-center  items-center mt-24">
      <div className="bg-gray-300 w-96 rounded-lg">
        <div className="flex justify-between items-center p-4 ">
          <h2 className=" text-2xl font-semibold text-black">People</h2>
          <BsThreeDotsVertical className=" text-2xl " />
        </div>
        <div className="flex mx-2  px-3 items-center gap-3 rounded ">
          <MdOutlineSearch className=" text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default People;
