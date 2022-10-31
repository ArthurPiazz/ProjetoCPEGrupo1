import React from 'react';
import {useNavigate} from "react-router-dom";
import "./cadastro.css";


function Cadastro() {
  
  const navigate = useNavigate()
  return (
      <div className="background_cadastro">
        <div className='base'>
          <div className='container'>
            <img id="logogamecastinglogin" src="/images/logoGamecasting.png" alt="Gamecasting"></img>
            <h1>Faça seu cadastro</h1>
            <input type = "text" placeholder="Nome completo"/>
            <br/> 
            <input type = "text" placeholder="Nome de usuário"/>
            <br/> 
            <input type = "text" placeholder="Telefone"/>
            <br/> 
            <input type = "text" placeholder="Email"/>
            <br/> 
            <input type = "text" placeholder="Senha"/>
            <br/> 
            <input type = "text" placeholder="Confirmar senha"/>
            <br/>
            <button onClick={()=>{navigate('/escolhaplano')}}>CONTINUAR</button> 
          </div>
        </div>
      </div>
  );
}

export default Cadastro;