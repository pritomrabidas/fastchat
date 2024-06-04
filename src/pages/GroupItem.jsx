import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import FriendItem from "./FriendItem";

const GroupItem = ({data}) => {
  const [show, setShow] = useState(false);
  const HandleClick=()=>{
    setShow(true)
  }
  return (
    <div>
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src="pritom101.jpg"
        alt="pritom"
        className=" w-16 h-16 rounded-full mr-5"
      />
      <div className="">
      <p className=" font-medium text-2xl">{data.groupName}</p>
      <span className="font-normal text-sm">Admin : {data.createBy}</span>
      </div>
      <button onClick={HandleClick} className="mx-auto flex text-2xl mr-1"><BsThreeDotsVertical/></button>
    </div>
    {
      show &&(
    <div className=" absolute left-0 top-0 w-full h-full bg-[rgba(31,31,31,0.78)]">
          <div className="m-auto flex justify-center items-center h-dvh">
            <div className="p-20 rounded-lg bg-white">
              <h2 className="py-1 text-xl font-normal">Add Friend</h2>
              <p className=" w-[180px] h-[2px] bg-slate-500 "></p>
              <span><FriendItem/></span>
              <button
                className=" px-4 py-2 bg-blue-400 rounded-xl mt-2 text-lg text-sky-950 font-normal"
              >
                Create
              </button>
              <span
                onClick={() => setShow(false)}
                className="mx-auto justify-end flex pt-2"
              >
                <GiCrossMark className="text-xl text-slate-800" />
              </span>
            </div>
          </div>
        </div>
      )
    }
    </div>
  )
}

export default GroupItem