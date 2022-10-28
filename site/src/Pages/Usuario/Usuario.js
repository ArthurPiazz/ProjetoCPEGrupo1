import React from 'react';
import "./CSS/Usuario.css"

function Usuario() {
  
  //const [nome, setNome] =  useState();
  //
  return (
<div>
<div class ="Background-Usuario">
    <head>
        <link rel="stylesheet" href="CSS/Usuario.css"></link>
        
    </head>    
<div class="body-Usuario">
    <Logo />
    <h1>Usuario</h1>
    <p>Informações</p>
</div>
</div> 
</div>
  );
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

export default Usuario;