import { getDatabase, ref, remove } from "firebase/database"

const BlockItem = ({data}) => {
  const db = getDatabase();
  
  const HandleUnblock =(key)=>{
    remove(ref(db, "Block/" + key))
  }
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src={data.blockId}
        alt="pritom"
        className=" w-16 h-16 rounded-full mr-5"
      />
      <p className="font-medium text-2xl">{data.blockName}</p>
      <button onClick={()=>HandleUnblock(data.key)} className="mx-auto flex text-2xl mr-1">Unblock</button>
    </div>
  )
}

export default BlockItem