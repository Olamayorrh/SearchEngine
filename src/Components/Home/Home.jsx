import { useState } from 'react';
// import logo from "../assets/images/sail_logo.jpg"
import logo from "../../assets/images/sail_logo.jpg"
import { FaMicrophone } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import './Home.css'

import search from './images/search1.png'
import mail from './images/mail.png'

import { BsSearch } from "react-icons/bs";
import { FaSun } from 'react-icons/fa6';
import { FaMoon} from 'react-icons/fa6';
import VoiceSearch from '../VoiceSearch/VoiceSearch';
// import { Recognition } from '../../Api/SpeachRecog';

const Home = ({searchsetter})=>{
    const [input, setInput] = useState("");

    const [changeBg , setchangeBg] = useState(false);
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


    function handleBg(){
        setchangeBg(!changeBg)
      }
    return(
        <div className='container1'>
            {/* <div className='container1'>
            <div className='logo'><img src={logo} id="brand"/></div>
            <div className='search'>
                <img src={search} id='search' />
            <form onSubmit={SubmitHandler}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="input"></input>
            </form>
            {input ? <MdCancel id='cancel' onClick={ClearInput}/> : null}
            <button><FaMicrophone id='mic'onClick={VoiceSearchToggler}/></button>
             </div>
            </div> */}

            <div className={changeBg ? "Bg" : "newBg"}>
            <div className="header" >
             <img src={logo} alt="" className='logoIMG' />

             <h3 className='logoName'>sail search engines</h3>
              <button className="chaneBg" onClick={handleBg}>
                 {
                  changeBg ?  <FaMoon  className={changeBg ? "moonIcon" : ""} /> :   <FaSun  className={changeBg ? "sunIcon" : ""}  />
                 }
              </button>
         </div>

         {
            changeBg ? <hr style={{border:"1px solid white"}}/>: <hr  style={{border:"1px solid black"}}/>
         }
        
        
          
          <div className="searchBody">
            
            <div className="firstBox">
               
                <button className='microPhoneIcone'> <BsSearch /></button>
                
                <form onSubmit={SubmitHandler}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className="input"></input>
                </form>

                {input ? <MdCancel id='cancel' onClick={ClearInput}/> : null}
                
                
            </div>
           
          </div>
    </div>

    </div>
           
       
      
    )
}

export default Home;