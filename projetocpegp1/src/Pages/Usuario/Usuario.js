import React from "react";
import "./usuario.css";
import Footer from "../Footer";

function Usuario() {
  //const [nome, setNome] =  useState();
  //
  return (
    <div class="Background-Usuario">
      <head>
        <link rel="stylesheet" href="usuario.css"></link>
      </head>

      <div className="containerGeral">
        <div class="userBlock">
          <br></br>
          <br></br>
          <div class="ImagemPerfil-Usuario" />
          <div class="NomedoUsuario-Usuario">
            <NomeDoUsuario />
          </div>
        </div>

        <div className="userBottom">
          <div class="jogosRecentes">
            <div className="titulojogosRecentes">
              <h3>Jogos Recentes</h3>
            </div>
            <div className="grupojogos">
              <div className="jogouser">
                {" "}
                <img src="./images/ESO.png" alt="ESO" />
                <p className="titulo">The Elden Ring</p>
              </div>
              <div className="jogouser">
                {" "}
                <img src="./images/image 23.png" alt="WOW" />
                <p className="titulo">World of Warcraft</p>
              </div>

              <div className="jogouser">
                {" "}
                <img src="./images/image 26.png" alt="GW2" />
                <p className="titulo">Guildwars 2</p>
              </div>

              <div className="jogouser">
                {" "}
                <img src="./images/image 29.png" alt="Diablo" />
                <p className="titulo">Diablo</p>
              </div>
            </div>
          </div>

          <div class="jogosRecentes">
          <div className="titulojogosRecentes">
              <h3>Amigos Online</h3>
            </div>
            <div className="grupojogos">
              <div class="Quadrado-amigos2">
                <div class="ImagemPerfilAmigo" />
                <div class="TextoPerfilAmigo">
                  <NomeDoUsuario />
                </div>
              </div>
              <div class="Quadrado-amigos2">
                <div class="ImagemPerfilAmigo" />
                <div class="TextoPerfilAmigo">
                  <NomeDoUsuario />
                </div>
              </div>
              <div class="Quadrado-amigos3">
                <div class="ImagemPerfilAmigo" />
                <div class="TextoPerfilAmigo">
                  <NomeDoUsuario />
                </div>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

function NomeDoUsuario() {
  //implementação de backend nao feita
  return "Não Encontrado";
}

/*function GetJogosRecentes() {
 return "";
}*/

export default Usuario;
