import {createRoutesFromElements,createBrowserRouter,RouterProvider,Route, Outlet,} from "react-router-dom";
import Layout from "./Components/Layout";
import People from "./Components/pages/People";
import Friends from "./Components/pages/Friend";
import Group from "./Components/pages/Group";
import FriendRequest from "./Components/pages/Request";
import BlockList from "./Components/pages/Block";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout/>}></Route>
        <Route path="/people" element={<People/>}></Route>
        <Route path="/friend" element={<Friends/>}></Route>
        <Route path="/request" element={<FriendRequest/>}></Route>
        <Route path="/group" element={<Group/>}></Route>
        <Route path="/block" element={<BlockList/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} /> 
}

export default App
