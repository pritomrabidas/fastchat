import { useEffect, useState } from "react";
import RequestItem from "./RequestItem";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";

const FriendRequest = () => {
  const db = getDatabase();
  const [friendRequest, setFriendRequest] = useState([])
  
  
  useEffect(() => {
    const arr = []
    const starCountRef = ref(db, "FriendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item)=>{
        arr.push(item.val())
      })
      setFriendRequest(arr);
    });
  }, []);
  console.log(friendRequest);
  return (
    <div className=" h-screen overflow-scroll w-full bg-gray-300">
      <Title heading="Request" />
      <RequestItem />
    </div>
  );
};

export default FriendRequest;
