import React from 'react';
import "./footer.css";

import { FaInstagram } from "react-icons/fa";



function Footer(){

    return(

    <div>   
    <footer className="footerPagina">

    <div><Logo /></div>
    <div className="logoCPE"></div>  
    <div className="CPEtexto"></div>
    <div className="Social">
    <a href="https://www.instagram.com/speak.up.tech/">
          <FaInstagram size="40"  color="#000"/>
        </a>
       
        </div>
    </footer>
   
    </div> 
    )
    






}


function Logo(){
    return(
    <div>
    <div class="logo"></div>
    <div class="logo-parte-roxa"></div>
    <div class="logo-parte-branca"></div>
    <div class="logo-texto">GAMECASTING</div>
    </div>
    );
}




export default Footer; 