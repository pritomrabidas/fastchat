import { useDispatch } from "react-redux";
import Title from "./Title";
import { currentFriendInfo } from "../slice/chatFriendInfo";
const ChatFriend = ({data}) => {
    const disptch = useDispatch();
    const HandleClick = ()=>{
        disptch(currentFriendInfo(data))
    }
  return (
    <div onClick={HandleClick} className="w-1/3 bg-gray-300 ">
      <Title heading="Friends" />
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
      <span className="font-medium text-sm">10.12 PM</span>
    </div>
      </div>
  )
}

export default ChatFriend
