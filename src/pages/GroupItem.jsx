import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiCrossMark } from "react-icons/gi";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";

const GroupItem = ({ data, mygroup }) => {
  const [show, setShow] = useState(false);
  const db = getDatabase();
  const user = useSelector((state) => state.userSlice.user);
  const [friendList, setFriendList] = useState([]);
  const [add, setAdd] = useState(true);

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
  }, []);
  const HandleClick = () => {
    if (mygroup) {
      setShow(true);
    }
  };
  const HandleAdd = () => {
    setAdd(false)
  };
  return (
    <div>
      <div className=" mx-6 mb-2 items-center flex">
        <img
          src="pritom101.jpg"
          alt="pritom"
          className=" w-16 h-16 rounded-full mr-5"
        />
        <div className="">
          <p className=" font-medium text-2xl">{data.groupName}</p>
          <span className="font-normal text-sm">Admin : {data.createBy}</span>
        </div>
        <button onClick={HandleClick} className="mx-auto flex text-2xl mr-1">
          <BsThreeDotsVertical />
        </button>
      </div>
      {show && (
        <div className=" absolute left-0 top-0 w-full h-full bg-[rgba(31,31,31,0.78)] overflow-scroll">
          <div className="m-auto flex justify-center items-center h-dvh">
            <div className="p-20 rounded-lg bg-white">
              <h2 className="py-1 text-xl font-normal">Add Friend</h2>
              <p className=" w-[180px] h-[2px] bg-slate-500 mb-3"></p>
              {friendList ? (
                friendList.map((item) => (
                  <div key={item.key} className=" mb-2 items-center flex ">
                    <img
                      src={item?.friendImg}
                      alt="pritom"
                      className=" w-12 h-12 rounded-full mr-2"
                    />
                    <p className=" font-medium text-xl mr-3">
                      {item?.friendName}
                    </p>
                    <p className="mx-auto flex text-2xl mr-1 gap-2">
                       {
                        add ?
                      <button
                        onClick={() => HandleAdd(data, item)}
                        className="font-normal justify-end text-lg py-1 px-3 rounded font-mono text-black bg-red-500 "
                      > Add
                      </button>
                        : 
                      <button
                        onClick={() => HandleAdd(data, item)}
                        className="font-normal justify-end text-lg py-1 px-3 rounded font-mono text-black bg-red-500 "
                      > Member
                      </button>
                       }
                    </p>
                  </div>
                ))
              ) : (
                <p>No Friend is avaiable</p>
              )}
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
    </div>
  );
};

export default GroupItem;
