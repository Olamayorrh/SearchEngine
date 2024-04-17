import {Outlet} from "react-router-dom"
import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"

const Layout = ()=>{
    return(
        <>
            <Navbar />
            <Home />
            <Outlet />
        </>
    )
}

export default Layout;