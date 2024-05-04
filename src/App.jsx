import { createRoutesFromElements,createBrowserRouter,RouterProvider,Route,} from "react-router-dom";
import Layout from "./Components/Layout";
import People from "./pages/People";
import Friends from "./pages/Friend";
import Group from "./pages/Group";
import FriendRequest from "./pages/Request";
import BlockList from "./pages/Block";
import Register from "./Components/Register";
import SignIn from "./Components/SignIn";
import Chat from "./pages/Chat";
import ForgotEmail from "./Components/ForgotEmail";
import ForgotNumber from "./Components/ForgotNumber";
import ChatBox from "./pages/ChatBox";
import User from "./pages/user";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="registration" element={<Register />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="forgotnumber" element={<ForgotNumber />}></Route>
        <Route path="forgotemail" element={<ForgotEmail />}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/user" element={<User />}></Route>
          <Route path="/chat" element={<ChatBox />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/friend" element={<Friends />}></Route>
          <Route path="/request" element={<FriendRequest />}></Route>
          <Route path="/group" element={<Group />}></Route>
          <Route path="/block" element={<BlockList />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
