
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from "./images/logo.png"
import avatar from "./images/avatar.png"
const Navbar = ()=>{
    return(
        <div className="nav">
          <NavLink to={'/mail'}>Gmail</NavLink>
          <NavLink to={'/apps'}> <img src={logo} alt="pix" id="img1"/></NavLink>
          <NavLink to={'/users'}><img src={avatar} alt="profile" id="img2"/></NavLink>
        </div>
    )
}

export default Navbar;