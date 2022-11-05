import React from 'react';
import "./footer.css";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




function Footer(){

    return(

    <div>   
        
    <div className="ContainerFooter">  
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Iceland"></link>
    <div className="footerPagina">
    
    <div><Logo /></div>
    <div className="containerLogoeTexto">
        <div className="logoCPE"></div>  
        <div className="CPEtexto">CPE</div>
    </div>

    <div className="CPEPorExtenso">Consultoria e Projetos Elétricos</div>
   
    <div className="Social">

    <a href="https://www.instagram.com">
          <FaInstagram size="40"  color="#000"/>
          gamecasting.of
        </a>
       
    <a href="https://twitter.com/"><FaTwitter size="40"  color="#000"></FaTwitter>
    gamecasting
    </a>   
        </div> 
    </div>
   
    </div> 
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