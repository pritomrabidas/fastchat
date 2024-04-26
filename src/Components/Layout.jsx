import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import { useSelector } from "react-redux"
import { useEffect } from "react"
// import Header from "./Header"

const Layout = () => {

  const navigate = useNavigate()
  const user = useSelector((state)=> state.userSlice.user)

  useEffect(()=>{
    if (!user) {
      return navigate("/signin")
    }
  })
  return (
    <div className="flex">
    {/* <Header/> */}
    <Navbar />
    <Outlet/>
    </div>
  )
}

export default Layout