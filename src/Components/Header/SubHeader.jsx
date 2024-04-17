import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdApps } from "react-icons/md";

const SubHeader = ()=>{
    return(
        <div >
            <ul style={{display:"flex"}}>
                <li style={{listStyleType:"none"}}>
                    <NavLink to={'/'}>
                    <CiSearch /><span>All</span>
                    </NavLink>
                </li>

                <li style={{listStyleType:"none"}}>
                    <NavLink to={'/'}>
                    <CiSearch /><span>Videos</span>
                    </NavLink>
                </li>

                <li style={{listStyleType:"none"}}>
                    <NavLink to={'/'}>
                    <MdApps /><span>More</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SubHeader;