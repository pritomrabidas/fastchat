import Title from "./Title";
const Chat = () => {
  const userfromlocal = JSON.parse(localStorage.getItem('user'))
  console.log(userfromlocal);
  return (
    <div className="container w-full">
      <Title heading="Chats" />
    </div>
  )
}

export default Chat