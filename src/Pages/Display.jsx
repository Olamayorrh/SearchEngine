import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'
import Header from '../Components/Header/Header';
import SearchData from '../Components/searchData/SearchData';


const SearchDisplay = ({search, googledData, searchsetter})=>{
   
    const navigate = useNavigate();
    console.log(googledData);
    
    // useEffect((search)=>{
    //     if(search === '' || googledData === "{}"){
    //         navigate('/')
    //     }
    //     // navigate("/search")
    // }, [search])
    
    

    return(
        <>
            <Header search={search} searchsetter={searchsetter}/>
             <div>
            <SearchData googledData={googledData}/>
            </div>
        </>
       
    )
}

export default SearchDisplay;