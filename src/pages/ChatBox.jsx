
import ChatFriend from "./ChatFriend";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChatApp from "./ChatApp";


const ChatBox = () => {

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
    <div className="chatBox flex m-auto bg-slate-100">
      {friendList.length > 0 ? (
          friendList.map((item) => <ChatFriend key={item.key} data={item} />)
        ) : (
          <p className="text-center">No Friend Available</p>
        )}
    <ChatApp/>
    </div>
  );
};

export default ChatBox;
