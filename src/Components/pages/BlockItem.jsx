
const BlockItem = () => {
  return (
    <div className=" mx-6 mb-2 items-center flex">
      <img
        src="pritom101.jpg"
        alt="pritom"
        className=" w-16 h-16 rounded-3xl mr-5"
      />
      <p className=" font-medium text-2xl">Pritom Rabidas</p>
      <button className="mx-auto flex text-2xl mr-1">Unblock</button>
    </div>
  )
}

export default BlockItem