import { getDatabase, push, ref, set, onValue } from "firebase/database";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PeopleItem = ({ userData }) => {
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  const [blockList, setBlockList] = useState([]);
  const [friendRequest, setFriendRequest] = useState([]);
  const [realtime, setRealtime] = useState(false);
  const user = useSelector((state) => state.userSlice.user);

  const HandleRequest = (key, username) => {
    setRealtime(!realtime);
    set(push(ref(db, "FriendRequest/")), {
      SenderName: user.displayName,
      SenderId: user.uid,
      ReciverName: username,
      ReciverId: key,
    });
  };

  useEffect(() => {
    const arr = [];
    const starCountRef = ref(db, "FriendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().SenderId + item.val().ReciverId);
      });
      setFriendRequest(arr);
    });
  }, [realtime]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "Friends/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().friendId + item.val().ReciverId);
      });
      setFriendList(arr);
    });
  }, [realtime]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "Block/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val().blockbyId + item.val().blockId);
      });
      setBlockList(arr);
    });
  }, [realtime]);

  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src={userData.profile_picture}
        alt="pritom"
        className=" w-10 h-10 rounded-full mr-5"
      />
      <p className=" font-medium text-2xl font-sans">{userData.username}</p>
      <>
        {friendRequest.includes(user.uid + userData.key) ? (
          <button className="mx-auto flex text-2xl mr-1 font-sans">
            Cancel Request
          </button>
        ) : friendRequest.includes(userData.key + user.uid) ? (
          <button className="mx-auto flex text-2xl mr-1 font-sans">-</button>
        ) : friendList.includes(userData.key + user?.uid) ||
          friendList.includes(user?.uid + userData.key) ? (
          <button className="mx-auto flex text-2xl mr-1 font-sans">
            Friend
          </button>
        ) : blockList.includes(userData.key + user.uid) ||
          blockList.includes(user.uid + userData.key) ? (
          <button className="mx-auto flex text-2xl mr-1 font-sans">
            Blocked
          </button>
        ) : (
          <button
            onClick={() => HandleRequest(userData.key, userData.username)}
            className="mx-auto flex text-2xl mr-1 font-sans"
          >
            Add Request
          </button>
        )}
      </>
    </div>
  );
};

export default PeopleItem;
