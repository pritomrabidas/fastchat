import { useEffect, useState} from "react";
import PeopleItem from "./PeopleItem";
import Title from "./Title";
import { getDatabase, ref, onValue } from "firebase/database";

const People = () => {
  const [userlist, setUserList] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item)=>{
        arr.push({...item.val(), key: item.key});
        setUserList(arr);
      });
    });
  },[]);
  console.log(userlist);
  return (
    <div className="w-full h-screen overflow-scroll flex flex-col bg-gray-300 ">
      <Title heading="People" />
      <PeopleItem />
      <PeopleItem />
      <PeopleItem />
      <PeopleItem />
    </div>
  );
};

export default People;