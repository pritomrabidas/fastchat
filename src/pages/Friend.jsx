import { getDatabase, onValue, ref } from "firebase/database";
import FriendItem from "./FriendItem";
import Title from "./Title";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Friends = () => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "Friends/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().friendId == user.uid) {
          arr.push({
            friendID: item.val().ReciverId,
            friendName: item.val().ReciverName,
            friendImg: item.val().ReciverProfile,
            key: item.key,
          });
        } else if (item.val().ReciverId == user.uid) {
          arr.push({
            friendID: item.val().friendId,
            friendName: item.val().friendName,
            friendImg: item.val().friendProfile,
            key: item.key,
          });
        }
      });
      setFriendList(arr);
    });
  },[]);
  return (
    <>
      <div className="w-full h-screen overflow-scroll bg-gray-300">
        <Title heading="Friends" />
        {friendList.length > 0 ? (
          friendList.map((item) => <FriendItem key={item.key} data={item} />)
        ) : (
          <p className="text-center">No Friend Available</p>
        )}
      </div>
    </>
  );
};

export default Friends;
