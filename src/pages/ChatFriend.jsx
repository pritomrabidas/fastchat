import { useDispatch } from "react-redux";

import { currentFriendInfo } from "../slice/chatFriendInfo";
const ChatFriend = ({data}) => {
    const disptch = useDispatch();
    const HandleClick = ()=>{
        disptch(currentFriendInfo(data))
        localStorage.setItem("currentFriendInfo", JSON.stringify(data));
    }
  return (
    <div onClick={HandleClick} className="w-1/3 bg-gray-300 ">
      <div className=" mx-6 mb-2 items-center flex">
      <img
        src={data?.friendImg}
        alt="pritom"
        className=" w-14 h-14 rounded-full mr-3"
      />
      <div className="mr-7">
      <p className=" font-medium text-xl">{data?.friendName}</p>
      <p className="font-normal text-xs text-slate-800">Send Message</p>
      </div>
    </div>
      </div>
  )
}

export default ChatFriend
