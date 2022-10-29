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
    <div class="RetangulodoNome">
      <br></br><br></br>
      <div class="ImagemPerfil" />
      <div class="NomedoUsuario"><NomeDoUsuario /></div>
    
    </div>
    <div class="Rodape"><Logo /><br /><br /><br />
    
    </div> 
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

function NomeDoUsuario(){ //implementação de backend nao feita
  return("Não Encontrado");
}

export default Usuario;