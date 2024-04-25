import RequestItem from "./RequestItem";
import Title from "./Title";
const FriendRequest = () => {
  return (
    <div className=" h-screen overflow-scroll w-full bg-gray-300">
      <Title heading="Request" />
      <RequestItem/>
      <RequestItem/>
      <RequestItem/>
      <RequestItem/>
      <RequestItem/>
      <RequestItem/>
    </div>
  )
}

export default FriendRequest