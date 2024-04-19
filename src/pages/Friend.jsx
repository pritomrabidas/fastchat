import FriendItem from "./FriendItem";
import Title from "./Title";
const Friends = () => {
  return (
    <>
    <div className="container w-full bg-gray-300">
      <Title heading="Friends" />
      <FriendItem/> 
      <FriendItem/> 
      <FriendItem/> 
      <FriendItem/> 
      <FriendItem/> 
    </div>
    
    </>
  )
}

export default Friends