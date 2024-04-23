import { NavLink } from "react-router-dom";

import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "./Header.css"


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
       
       <div className="resultPage" >
            {/* <NavLink to={"/"}>
                <img src={logo} alt="Product Logo" />
            </NavLink> */}

            <div className="searchBox">
            <FaSearch onClick={HandleSearch} size={20}/>
            <form  onSubmit={SubmitHandler}>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} style={{width:"100%"}}/>
            </form>
            {searchText? <MdCancel onClick={ClearInput} size={20}/>:null}
            
            </div>

            <FaMicrophone id='mic' size={30} />
        </div>
    )
}


export default SearchHeader;