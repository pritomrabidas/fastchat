import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiGalleryFill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
const ChatBox = () => {
  return (
    <div className="chatBox">
      <div className="p-2 gap-3 flex items-center border-b">
        <div>
          <img
            src="pritom101.jpg"
            alt="pritom"
            className=" w-12 h-12 rounded-full"
          />
        </div>
        <h2 className="font-medium text-2xl font-serif">Pritom Rabidas</h2>
      </div>
      <div className="messages-area">
        <div className="message one"></div>
        <div className="message two"></div>
        <div className="message three"></div>
        <div className="message four"></div>
        <div className="message five"></div>
        <div className="message six"></div>
      </div>
      <div className="sender-area">
        <div className="input-place flex justify-between">
          <input
            placeholder="Send a message."
            className="send-input"
            type="text"
          />
          <div className="send mr-1 gap-2 flex">
            <MdOutlineEmojiEmotions className="text-xl text-white" />
            <RiGalleryFill className="text-xl text-white" />
            <MdKeyboardVoice className=" text-xl text-white" />
            <IoMdSend className="text-xl text-white" />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChatBox;
