import "./Login.css";
import React from 'react';
import {useNavigate} from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    return(
        <div className="background_login">
<<<<<<< HEAD
    <div className="base">
        <div className="container">
        <h1>LOGIN</h1>
        <img src= "/images/Rectangle 3.png" alt = "Rectangle 3"/>
        <form className="inputs"/>
        <input></input>
        <input></input>
        <br/>
        <button class="button" onClick={()=>{navigate('/plataforma')}}>ENTRAR</button>
        
        <br/>
        <h1>Novo na plataforma?</h1>
        <br/>
        <button onClick={()=>{navigate('/cadastro')}}><img src= "/images/Clique_Aqui.png" alt = "Clique_Aqui"/></button>
        </div>
    </div>
    </div>
=======
            <div className="base">
                <div className="container_login">
                    <div class="titulologin">
                        <img  onClick={()=>{navigate('/home')}} id="logogamecastinglogin" src="/images/logoGamecasting.png" alt="Gamecasting"></img>
                    </div>  
                    <form className="inputs">
                    <label itemID="email">Email</label>
                    <input className="email" placeholder="Digite seu Email"></input>
                    <br></br>
                    <label itemID="senha">Senha</label>
                    <input className="senha" placeholder="Digite sua senha"></input>
                    </form>
                    <br/>
                    <button class="button" onClick={()=>{navigate('/usuario')}}>ENTRAR</button>
                    <br/>
                    <label itemID="esqueciasenha">Novo na plataforma?</label>
                    <button id="esqueciasenha" onClick={()=>{navigate('/cadastro')}}>Clique Aqui</button>
                </div>
                
                <br/>
            
            </div>
     </div>
>>>>>>> CSSplataforma
);
}

export default Login;