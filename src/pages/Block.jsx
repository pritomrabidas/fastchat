import { useSelector } from "react-redux";
import BlockItem from "./BlockItem";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const BlockList = () => {
  const db = getDatabase();
  const [blockList, setBlockList] = useState([]);
  const user = useSelector((state) => state.userSlice.user);

  useEffect(() => {
    let arr = [];
    const starCountRef = ref(db, "Block/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        if (item.val().blockbyId == user.uid) {
          arr.push({...item.val(), key: item.key})
        }
      });
      setBlockList(arr);
    });
  }, []);

  return (
    <div className=" h-screen overflow-scroll w-full bg-gray-300">
      <Title heading="Blocks" />
      {
        blockList.length > 0
        ?
        blockList.map((item)=>(
          <BlockItem key={item.key} data={item}/>

        ))
        :
        <p className="text-center text-black">No Blocked List Avaiable</p>
      }
    </div>
  )
}

export default BlockList