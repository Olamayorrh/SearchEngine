import { useState } from 'react';
import { FaMicrophone } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import './Home.css'
import logo from './images/logo.png'
import search from './images/search1.png'
import mail from './images/mail.png'
import VoiceSearch from '../VoiceSearch/VoiceSearch';
// import { Recognition } from '../../Api/SpeachRecog';

const Home = ({searchsetter})=>{
    const [input, setInput] = useState("");
    const [VoiceSearch, setVoiceSearch] = useState(false);

    
    const SubmitHandler = (e)=>{
        e.preventDefault();

        if(/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+[" "].*/.test(input)){
        searchsetter(input)
    };

   
    }

    const ClearInput = ()=>{
        setInput('');
    } 

    const VoiceSearchToggler = ()=>{
        setVoiceSearch((status)=>!status)
        Recognition.start()
    }
    return(
        <>
            <div className='container1'>
            <div className='logo'><img src={logo} id="brand"/></div>
            <div className='search'>
                <img src={search} id='search' />
            <form onSubmit={SubmitHandler}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}></input>
            </form>
            {input ? <MdCancel id='cancel' onClick={ClearInput}/> : null}
            <button><FaMicrophone id='mic'onClick={VoiceSearchToggler}/></button>
             </div>
            </div>
            {/* {
                VoiceSearch?<div><VoiceSearch /></div>:null
            } */}
            
        </>
      
    )
}

export default Home;