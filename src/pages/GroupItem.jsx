
const GroupItem = ({data}) => {
  return (
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
      <p className="mx-auto flex text-2xl mr-1">10.30 PM</p>
    </div>
  )
}

export default GroupItem