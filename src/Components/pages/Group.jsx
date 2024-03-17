import GroupItem from "./GroupItem";
import Title from "./Title";
const Group = () => {
  return (
    <div className="container w-full bg-gray-300">
      <Title heading="Groups" />
      <GroupItem/>
      <GroupItem/>
      <GroupItem/>
      <GroupItem/>
    </div>
  )
}

export default Group