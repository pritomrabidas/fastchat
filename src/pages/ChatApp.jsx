import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const ChatApp = () => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const friend = useSelector((action) => action.chatFriendInfo.friendInfo);
  const [chat, setChat] = useState("");
  const [sendMessage, setSendMessage] = useState([]);
  const [realtime, setRealtime] = useState([]);
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  const HandleSand = () => {
    if (!chat) {
      console.log("Please Enter Your Messsage");
    } else {
      set(push(ref(db, "singleChat/")), {
        senderId: user.uid,
        reciverId: friend.friendID,
        message: chat,
        time: formatAMPM(new Date()),
      }).then(() => {
        setChat("");
        setRealtime(!realtime);
      });
    }
  };

  const Handlekey =(e)=>{
    if (e.code == "Enter") {
      HandleSand()
    }
  }

  useEffect(() => {
    let arr = [];
    onValue(ref(db, "singleChat/"), (snapshot) => {
      snapshot.forEach((item) => {
        if (
          item.val().senderId == user.uid &&
          item.val().reciverId == friend.friendID
        ) {
          arr.push({ ...item.val(), key: item.key });
        } else if (
          item.val().reciverId == user.uid &&
          item.val().senderId == friend.friendID
        ) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setSendMessage(arr);
    });
  }, [friend, realtime]);
  return (
    <div className=" w-2/3 overflow-hidden">
      <div className="p-2 gap-3 flex items-center border-b bg">
        <div>
          <img
            src={friend?.friendImg}
            alt="pritom"
            className=" w-12 h-12 rounded-full"
          />
        </div>
        <h2 className="font-medium text-2xl font-serif">
          {friend?.friendName}
        </h2>
      </div>
      <div className="h-full ">
        <div className="messages-area overflow-y-scroll p-2">
          {/* Sender Box */}
          {sendMessage.map((item) =>
            item.senderId == user.uid ? (
              <div key={item.key} className=" max-w-[60%] ml-auto pb-1">
                <p className="text-xl ml-auto font-normal text-white bg-red-400 w-fit  px-2  rounded-md rounded-br-sm mb-1">
                  {item.message}
                </p>
                <p className="text-xs ml-auto font-normal text-white  w-fit  pb-1 rounded-md rounded-br-sm mb-1">
                  {item.time}
                </p>
              </div>
            ) : (
              <div key={item.key} className=" max-w-[60%]">
                <p className="text-xl font-normal text-white bg-red-400 w-fit px-2 py-1 rounded-md rounded-br-sm mb-1">
                  {item.message}
                </p>
                <p className="text-xs ml-auto font-normal text-white  w-fit  pb-1 rounded-md rounded-br-sm mb-1">
                  {item.time}
                </p>
              </div>
            )
          )}
        </div>
        <div className="sender-area">
          <div className="input-place flex justify-between">
            <input
            onKeyPress={Handlekey}
              onChange={(e) => setChat(e.target.value)}
              placeholder="Send a message."
              className="send-input"
              type="text"
              value={chat}
            />
            <div className="send mr-1 gap-2 flex">
              <MdOutlineEmojiEmotions className="text-xl text-white" />
              <RiGalleryFill className="text-xl text-white" />
              <MdKeyboardVoice className=" text-xl text-white" />
              <IoMdSend
                onClick={() => HandleSand()}
                className="text-xl text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
