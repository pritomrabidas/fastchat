import { useEffect, useState} from "react";
import PeopleItem from "./PeopleItem";
import Title from "./Title";
import { useSelector } from "react-redux";
import { getDatabase, ref, onValue } from "firebase/database";

const People = () => {
  const [userlist, setUserList] = useState([]);
  const [loading, setLoading] = useState(true)
  const db = getDatabase();
  const user = useSelector((state)=> state.userSlice.user)

  useEffect(() => {
    const starCountRef = ref(db, "users/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item)=>{
        if (item.key !== user.uid) {
          arr.push({...item.val(), key: item.key});
        }
        setUserList(arr);
        setLoading(false)
      }); 
    });
  },[]);
  return (
    <div className="w-full h-screen overflow-scroll flex flex-col bg-gray-300 ">
      <Title heading="People" />
      {
      loading
      ?
      (
        <p>loding data</p>
      )
      :
      (
        userlist.map((item)=>(
          <PeopleItem userData ={item} key ={item.key} />
        ))
      )}
    </div>
  );
};

export default People;