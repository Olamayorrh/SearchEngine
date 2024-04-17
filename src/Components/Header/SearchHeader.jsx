import { NavLink } from "react-router-dom";
import logo from './images/logo.png'
import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const SearchHeader = ({search, searchsetter})=>{
    const [searchText, setSearchText] = useState('');

    useEffect(()=>{setSearchText(search)},[search])

    
    const SubmitHandler = (e)=>{
        e.preventDefault();

        if(/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+[" "].*/.test(searchText)){
            searchsetter(searchText)
    };
    };

    
    const HandleSearch = ()=>{
        if(/^[a-zA-Z0-9].*/.test(searchText) || /^[a-zA-Z0-9]+[" "].*/.test(searchText)){
            searchsetter(searchText)
     }
    }

    const ClearInput = ()=>{
        setSearchText('');
    } 
   
    return(
       
       <div>
            <NavLink to={"/"}>
                <img src={logo} alt="Product Logo" />
            </NavLink>

            <div style={{width:"60%", display:"flex", border:'2px solid black',padding:"10px",justifyContent:"center", alignItems:"center"}}>
            <FaSearch onClick={HandleSearch}/>
            <form style={{width:"100% "}} onSubmit={SubmitHandler}>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} style={{width:"100%"}}/>
            </form>
            {searchText? <MdCancel onClick={ClearInput}/>:null}
            <button><FaMicrophone id='mic'/></button>
            </div>
        </div>
    )
}


export default SearchHeader;