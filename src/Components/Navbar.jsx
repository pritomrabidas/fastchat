import { Link } from "react-router-dom";
import { IoPeople } from "react-icons/io5";
import { GiThreeFriends } from "react-icons/gi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineBlock } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className=" w-[350px] bg-gray-300 hover:overflow-scroll mr-[1px] h-screen">
      <div className=" p-5">
        <div className=" mb-8">
          <img src="logo.png" alt="logo" />
        </div>
        <ul className=" flex-col text-lg font-bold text-white">
          <li className=" pl-6 pr-14  bg-slate-800 rounded-lg transition-colors hover:bg-gray-300 hover:text-black mb-3 w-fit">
            <Link
              to="/user"
              className=" flex  gap-4 text-center items-center py-3 px-2 w-fit"
            >
              <IoChatboxOutline />
              <span>User</span>
            </Link>
          </li>
          <li className=" pl-6 pr-14 bg-slate-800 rounded-lg transition-colors hover:bg-gray-300 hover:text-black mb-3 w-fit">
            <Link
              to="/chat"
              className=" flex  gap-4 text-center items-center py-3 px-2 w-fit"
            >
              <IoChatboxOutline />
              <span>Chat</span>
            </Link>
          </li>
          <li className=" pl-6 pr-14 bg-slate-800 rounded-lg transition-colors hover:bg-gray-300 hover:text-black mb-3 w-fit">
            <Link
              to="/people"
              className=" flex  gap-4 text-center items-center py-3 px-2 w-fit"
            >
              <IoPeople />
              <span>People</span>
            </Link>
          </li>
          <li className=" pl-6 pr-12 bg-slate-800 rounded-xl transition-colors hover:bg-gray-300 hover:text-black mb-3 w-fit">
            <Link
              to="/friend"
              className=" flex  gap-4 text-center items-center py-3 px-2 w-fit"
            >
              <GiThreeFriends />
              Friends
            </Link>
          </li>
          <li className=" pl-6 pr-14 bg-slate-800 rounded-xl transition-colors hover:bg-gray-300 hover:text-black mb-3 w-fit">
            <Link
              to="/group"
              className=" flex  gap-4 text-center items-center py-3 px-2 w-fit"
            >
              <HiMiniUserGroup />
              Group
            </Link>
          </li>
          <li className=" pl-6 pr-7 bg-slate-800 rounded-xl transition-colors hover:bg-gray-300 hover:text-black mb-3 w-fit">
            <Link
              to="/block"
              className=" flex gap-4 text-center items-center py-3 px-2 w-fit"
            >
              <MdOutlineBlock />
              Block List
            </Link>
          </li>
          <li className=" px-6 bg-slate-800 rounded-xl transition-colors hover:bg-gray-300 hover:text-black  w-fit">
            <Link
              to="request"
              className=" flex  gap-4 text-center items-center py-3 px-2 "
            >
              <LiaUserFriendsSolid />
              Friend Requests
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
