import { useEffect, useState } from "react";
import RequestItem from "./RequestItem";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";
// import { useSelector } from "react-redux";

const FriendRequest = () => {
  const db = getDatabase();
  const [friendRequest, setFriendRequest] = useState([])
  const [userList, setUserList] = useState([]);
  // const user = useSelector((state) => state.userSlice.user);
  
  useEffect(() => {
    const arr = []
    const starCountRef = ref(db, "FriendRequest/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item)=>{
        // if (item.val().ReciverId == user.uid) {
        //   arr.push({...item.val, key: item.key})
        // }
        
        arr.push(item.val())
      })
      setFriendRequest(arr);
    });
  }, []);


  useEffect(() => {
    const starCountRef = ref(db, "users/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
        setUserList(arr);
      });
    });
  }, []);
  return (
    <div className=" h-screen overflow-scroll w-full bg-gray-300">
      <Title heading="Request" />
      {friendRequest.map((reqId) =>
          userList.map(
            (item) =>
              reqId.SenderId == item.key && (
                <RequestItem
                  key={item.key}
                  reqList={item}
                  frReqId={reqId.key}
                />
              )
          )
        )}
    </div>
  );
};

export default FriendRequest;
