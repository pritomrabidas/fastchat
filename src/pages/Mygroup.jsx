import { useEffect, useState } from "react";
import GroupItem from "./GroupItem";
import { LuSearch } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
const Mygroup = () => {
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [show, setShow] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [groupList, setGroupList] = useState([]);

  const HandleEdit = () => {
    setShow(true);
    setNameErr("");
  };
  const HandleCreate = () => {
    if (!groupName) {
      setNameErr("Enter Your Group Name");
    } else {
      set(push(ref(db, "Group/")), {
        groupName: groupName,
        createBy: user.displayName,
        createById: user.uid,
      }).then(() => {
        setShow(false);
        setGroupName("");
      });
    }
  };

  useEffect(() => {
    let arr =[]
    const starCountRef = ref(db, "Group/");
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item)=>{
        if (item.val().createById == user.uid) {
          arr.push({...item.val(), key:item.key})
        }
      })
      setGroupList(arr)
    });
  },[]);
  
  return (
    <div className=" h-screen overflow-scroll w-full bg-gray-300 relative ">
      <div className="bg-gray-300 ">
        <div className="flex justify-between items-center p-4 font-mono">
          <h2 className=" text-3xl mx-3 font-semibold text-black">My Group</h2>
          <MdEdit onClick={() => HandleEdit()} className=" text-2xl " />
        </div>
        <div className="flex px-3 py-3 mx-6 mb-4 items-center gap-3 border-2 rounded-lg justify-between">
          <input
            type="text"
            placeholder="Search"
            className="w-full outline-none bg-gray-300 text-lg font-serif"
          />
          <LuSearch className="text-3xl mr-8" />
        </div>
      </div>
      {show && (
        <div className=" absolute left-0 top-0 w-full h-full bg-[rgba(28,13,13,0.6)]">
          <div className="m-auto flex justify-center items-center h-dvh">
            <div className="p-10 rounded-lg bg-white">
              <h2 className="py-1 text-xl font-normal">Create New Group</h2>
              <p className=" w-[180px] h-[2px] bg-slate-500 "></p>
              <h3 className="p-4 text-xl font-medium justify-start">
                Group Name
              </h3>
              <input
                onChange={(e) => setGroupName(e.target.value)}
                type="text"
                placeholder="Group Name"
                className=" outline-none border-4 rounded-md px-2 py-1 flex "
              />
              <p className="text-sm p-1 text-red-700">{nameErr}</p>
              <button
                onClick={HandleCreate}
                className=" px-4 py-2 bg-blue-400 rounded-xl mt-2 text-lg text-sky-950 font-normal"
              >
                Create
              </button>
              <span
                onClick={() => setShow(false)}
                className="mx-auto justify-end flex pt-2"
              >
                <GiCrossMark className="text-xl text-slate-800" />
              </span>
            </div>
          </div>
        </div>
      )}
      {
        groupList.length > 0
        ?
        groupList.map((item)=>(
          
          <GroupItem key={item.key} data={item} />
        ))
        :<p className="text-center text-black overflow-hidden">No Mygroup List Avaiable</p>
      }
    </div>
  );
};

export default Mygroup;
