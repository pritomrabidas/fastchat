import { getDatabase, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const PeopleItem = ({userData}) => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const HandleRequest =((key, username)=>{
    set(push(ref(db, "FriendRequest/")), {
      SenderName: user.displayName,
      SenderId: user.uid,
      ReciverName: username,
      ReciverId: key
    })
  })
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src={userData.profile_picture}
        alt="pritom"
        className=" w-10 h-10 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl font-sans">{userData.username}</p>
      <button onClick={()=>HandleRequest(userData.key , userData.username)} className="mx-auto flex text-2xl mr-1 font-sans">Add Request</button>
    </div>
  );
};

export default PeopleItem;
