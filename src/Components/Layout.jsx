import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Header from "./Header"

const Layout = () => {
  return (
    <div className="flex">
    {/* <Header/> */}
    <Navbar />
    <Outlet/>
    </div>
  )
}

export default Layout