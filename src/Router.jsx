import {Route, Routes, useNavigate} from "react-router-dom"




import Home from "./Components/Home/Home"

import { useEffect, useState } from "react"


import {  SearchData } from "./Api/WordSearch"
import VoiceSearch from "./Components/VoiceSearch/VoiceSearch"
import SearchDisplay from "./Components/Display/Display"
import { ThemeProvider } from "./ThemeContext"




const Router =()=>{

const [search, setSearch] = useState('');
const [googledData, setGoogledData] = useState({});



        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsperpage] =useState(10);
        const [isLoading, setIsLoading] = useState(false);
        const [hasMoreResults, setHasMoreResults] = useState(false);

        

       







const navigate = useNavigate();

const searchsetter = async (word)=>{
    setSearch(word);

    console.log(search);
    
     const startIndex = (currentPage - 1) * itemsPerPage;
     const Searchdata = await SearchData(word,startIndex);

     console.log(currentPage);
     console.log(startIndex);
    
    console.log(Searchdata);
     setGoogledData(Searchdata);

     

     const Check = await Searchdata.queries.nextPage[0]

    console.log(Check);

    setHasMoreResults(Check);

   

    
    
     if(search === '' || googledData === "{}"){
                navigate('/')
             }
     navigate("/search");

     
    
};



const HandlePageChange = (currentPage)=>{
    return setCurrentPage(currentPage + 1);
   
}


useEffect(()=>{
    if (search){
       HandlePageChange()
       searchsetter()
    }
},[currentPage])














// useEffect((search)=>{
//     searchsetter(search)
//     if(search === '' || googledData === "{}"){
//                 navigate('/')
//     }
    
// }, [search])

// useEffect((input)=>{
//     searchsetter(input)
// },[search])


    return(
        <div>
             
                   
                    
            <ThemeProvider>
                <Routes>
                        <Route path='/' element={<Home searchsetter={searchsetter} />} />

                        {/* props are passed from here(searchdisplay route to Display.jsx in pages folder) */}
                        {
                            search !== ""?<Route path="/search" element={<SearchDisplay search={search}  googledData={googledData} searchsetter={searchsetter}
                        hasMoreResults={hasMoreResults}  currentPage={currentPage} setCurrentPage={setCurrentPage} HandlePageChange= {HandlePageChange} />} />:null

                        
                        }
                    
                        {/* <Redirect to="/"/> */}
                </Routes>
            </ThemeProvider>
            
        </div>
    )
}


export default Router;