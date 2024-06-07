import { getDatabase, push, ref, set, remove } from "firebase/database";
import { useSelector } from "react-redux";

const FriendItem = ({ data }) => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);

  const HandleBlock = (data)=>{
    set(push(ref(db, "Block/")), {
      blockbyId:user.uid,
      blockbyName:user.displayName,
      blockbyProfile: user.photoURL,
      blockId: data.friendID,
      blockName:data.friendName,
      blockProfile: data.friendImg,
    });
    remove(ref(db , "Friends/" + data.key))
    }
    const HandleUnfriend = ()=>{
      remove(ref(db , "Friends/" + data.key))
  }
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src={data?.friendImg}
        alt="pritom"
        className=" w-16 h-16 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl">{data?.friendName}</p>
      <p className="mx-auto flex text-2xl mr-1 gap-2">
        <button onClick={()=>HandleUnfriend(data)} className="font-normal text-lg py-1 px-3 rounded font-mono text-black bg-red-500 hover:text-white">
          Unfreind
        </button>
        <button onClick={()=>HandleBlock(data)} className="font-normal text-lg py-1 px-3 rounded font-mono text-black hover:bg-red-500 hover:text-white">
          block
        </button>
      </p>
    </div>
  );
};

export default FriendItem;
