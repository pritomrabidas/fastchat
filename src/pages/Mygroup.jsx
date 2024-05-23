import GroupItem from "./GroupItem";
import Title from "./Title";
const Mygroup = () => {
  return (
    <div className=" h-screen overflow-scroll w-full bg-gray-300">
      <Title heading="My Group" />
      <GroupItem/>
      <GroupItem/>
      <GroupItem/>
      <GroupItem/>
    </div>
  )
}

export default Mygroup