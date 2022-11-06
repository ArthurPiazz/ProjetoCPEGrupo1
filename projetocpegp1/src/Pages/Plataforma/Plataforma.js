import React from 'react';
import "./plataforma.css";
import Barra from '../Barra/Barra';

//import {useNavigate} from "react-router-dom";

 
function Plataforma(){
    

    return(
            <div className="background_plataforma">
            <Barra/>
            <br/>
            <div className= "content">
              <div className= "slides">
                <input type = "radio" name = "radio" id = "slide1"/>
                <input type = "radio" name = "radio" id = "slide2"/>
                <input type = "radio" name = "radio" id = "slide  3"/>

                <div className= "slide s1">
                  <img src = "./images/image10.png" alt = "CyberPunk" />
                </div>

                <div className= "slide s2">
                  <img src = "./images/mw.jpg" alt = "CoDMW" />
                </div>

                <div className= "slide s3">
                  <img src = "./images/thewitcher.jpg" alt = "TW3" />
                </div>

              </div>

              <div className= "navigation"> 
                <label class = "bar" for = "slide1"/>
                <label class = "bar" for = "slide2"/>
                <label class = "bar" for = "slide3"/>
              </div>

            </div>
 <h1>Plataforma</h1>
            </div>
  
           
        
        
);
}

export default Plataforma;