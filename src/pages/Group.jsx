import { useEffect, useState } from "react";
import GroupItem from "./GroupItem";
import Title from "./Title";
import { getDatabase, onValue, ref } from "firebase/database";
const Group = () => {
  const db = getDatabase();
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    let arr =[]
    const starCountRef = ref(db, "Group/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item)=>{
          arr.push({...item.val(), key:item.key})
      })
      setGroupList(arr)
    });
  },[]);
  return (
    <div className=" h-screen overflow-scroll w-full bg-gray-300">
      <Title heading="Groups" />
      {
        groupList.length > 0
        ?
        groupList.map((item)=>(
          
          <GroupItem key={item.key} data={item} />
        ))
        :<p className="text-center text-black overflow-hidden">No Mygroup List Avaiable</p>
      }
    </div>
  )
}

export default Group