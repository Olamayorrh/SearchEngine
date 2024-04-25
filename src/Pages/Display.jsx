import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom'
import Header from '../Components/Header/Header';
import SearchData from '../Components/searchData/SearchData';


const SearchDisplay = ({search, googledData, searchsetter,hasMoreResults, setCurrentPage, currentPage, HandlePageChange})=>{
   
    const navigate = useNavigate();
    console.log(googledData);
    
    useEffect((search)=>{
        if(search === '' || googledData === "{}"){
            navigate('/')
        }
        navigate("/search")
    }, [search])
    
    

    return(
        <>
            <Header search={search} searchsetter={searchsetter}/>

            {/* the props are then passed to searchData in searchData folder  where the button trigger the pagechange*/}
             <div>
                 <SearchData googledData={googledData} hasMoreResults={hasMoreResults} HandlePageChange={HandlePageChange} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
        </>
       
    )
}

export default SearchDisplay;