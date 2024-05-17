import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const RequestItem = ({ reqList }) => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);

  const HandleConfirm = (data) => {
    console.log(data);
    set(push(ref(db, "Friends/")), {
      friendId:data.key,
      friendName: data.username,
      friendProfile: data.profile_picture,
      ReciverId: user.uid,
      ReciverName: user.displayName,
      ReciverProfile:user.photoURL
    });
  };
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src={reqList.profile_picture}
        alt="pritom"
        className=" w-16 h-16 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl">{reqList.username}</p>
      <div className="flex flex-col ml-auto mr-1 gap-1">
        <button
          onClick={()=> HandleConfirm(reqList)}
          className=" font-normal text-lg py-1 px-3 rounded font-mono bg-slate-900 text-white hover:bg-gray-400 hover:text-black"
        >
          confirm
        </button>
        <button className="font-normal text-lg py-1 px-3 rounded font-mono text-black hover:bg-red-500 hover:text-white">
          cancel
        </button>
      </div>
    </div>
  );
};

export default RequestItem;
