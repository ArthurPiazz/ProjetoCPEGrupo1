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
    <div class="RetangulodoNome-Usuario">
      <br></br><br></br>
      <div class="ImagemPerfil" />
      <div class="NomedoUsuario-Usuario"><NomeDoUsuario /></div>
    
    </div>
    <div class="body-Informações">
      <div class="Texto-Jogos-Usuario">Jogos Recentes:</div>
      <GetJogosRecentes />
      <div>
        <img class="Primeiro-Jogo-Usuario" src= "CSS\newproject.png" alt="" />
        <div class = "Primeiro-Texto-Usuario"><br /><GetHoras /></div>

        <img class="Segundo-Jogo-Usuario" src= "CSS\newproject.png" alt="" />
        <div class = "Segundo-Texto-Usuario"><br /><GetHoras /></div>

        <img class="Terceiro-Jogo-Usuario" src= "CSS\newproject.png" alt="" />
        <div class = "Terceiro-Texto-Usuario"><br /><GetHoras /></div>
    </div>
    </div>
    <div class="body-Amigos">
    <div class="Texto-Jogos-Usuario">Amigos Online</div>
    <div class= "Quadrado-amigos">
    <div class="ImagemPerfilAmigo" />
    <div class="TextoPerfilAmigo"><NomeDoUsuario/></div>
    </div>
    <div class= "Quadrado-amigos">
    <div class="ImagemPerfilAmigo" />
    <div class="TextoPerfilAmigo"><NomeDoUsuario/></div>
    </div>
    <div class= "Quadrado-amigos2">
    <div class="ImagemPerfilAmigo" />
    <div class="TextoPerfilAmigo"><NomeDoUsuario/></div>
    </div>
    <div class= "Quadrado-amigos2">
    <div class="ImagemPerfilAmigo" />
    <div class="TextoPerfilAmigo"><NomeDoUsuario/></div>
    </div>
    <div class= "Quadrado-amigos3">
    <div class="ImagemPerfilAmigo" />
    <div class="TextoPerfilAmigo"><NomeDoUsuario/></div>
    </div>
    <div class= "Quadrado-amigos3">
    <div class="ImagemPerfilAmigo" />
    <div class="TextoPerfilAmigo"><NomeDoUsuario/></div>
    </div>
    </div>
    <a class="button-1-Usuario" href="http://localhost:3000/Home">Retorna para Home</a>
    <div class="Rodape-Usuario"><Logo /><br /><br /><br />
    
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

function GetJogosRecentes(){
  return("")
}

function GetHoras(){
  return("0" + " Horas Jogadas")
}


export default Usuario;