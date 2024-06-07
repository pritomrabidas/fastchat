import Title from "./Title";
const Chat = () => {
  const userfromlocal = JSON.parse(localStorage.getItem('user'))
  console.log(userfromlocal);
  return (
    <div className=" h-screen overflow-scroll w-full">
      <div className="w-1/4"></div>
      <Title heading="Chats" />
    </div>
  )
}

export default Chat