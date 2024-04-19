import { HiOutlineDotsVertical } from "react-icons/hi";
const FriendItem = () => {
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src="pritom101.jpg"
        alt="pritom"
        className=" w-16 h-16 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl">Pritom Rabidas</p>
      <p className="mx-auto flex text-2xl mr-1"><HiOutlineDotsVertical /></p>
    </div>
  )
}

export default FriendItem