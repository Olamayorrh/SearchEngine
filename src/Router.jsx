import {Route, Routes, useNavigate} from "react-router-dom"



import Layout from "./Components/Layout/Layout"
import Home from "./Components/Home/Home"
import Users from "./Pages/Users"
import Mail from "./Pages/Mail"
import Apps from "./Pages/Apps"
import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import SearchDisplay from "./Pages/Display"
import {  SearchData } from "./Api/WordSearch"
import VoiceSearch from "./Components/VoiceSearch/VoiceSearch"




const Router =()=>{

const [search, setSearch] = useState('');
const [googledData, setGoogledData] = useState({})

const navigate = useNavigate();

const searchsetter = async (word)=>{
    setSearch(word);
    

    const Searchdata = await SearchData(word);
    setGoogledData(Searchdata);
    
    navigate("/search");
    // console.log(googledData);
}


    return(
        <div>
             
                    <Navbar />
                    
                    <Routes>
                    <Route path='/' element={<Home searchsetter={searchsetter}/>} />
                    {
                        search !== ""?<Route path="/search" element={<SearchDisplay search={search} googledData={googledData} searchsetter={searchsetter}/>} />:null

                      
                    }
                   
                    {/* <Redirect to="/"/> */}
                    </Routes>
            
        </div>
    )
}


export default Router;