import React from 'react';
import {useNavigate} from "react-router-dom";
import "./cadastro.css";


function Cadastro() {
  
  const navigate = useNavigate()
  return (
      <div className="background_cadastro">
        <div className='base'>
          <div className='container_login'>
            <img onClick={()=>{navigate('/home')}} id="logogamecastinglogin" src="/images/logoGamecasting.png" alt="Gamecasting"></img>
            <h1>Faça seu cadastro</h1>
            
              <label>Nome</label>
              <input type="text" placeholder="Nome completo"/>
              <br/> 
              <label>Usuário</label>
              <input type="text" placeholder="Nome de usuário"/>
              <br/> 
              <label>Telefone </label>
              <input type="text" placeholder="Telefone"/>
              <br/> 
              <label>Email</label>
              <input type = "text" placeholder="Email"/>
              <br/> 
              <label>Senha</label>
              <input type = "text" placeholder="Senha"/>
              <br/> 
              <label>Nome</label>
              <input type = "text" placeholder="Confirmar senha"/>
              <br/>
              <button class="button" onClick={()=>{navigate('/cadastro/escolhaplano')}}>CONTINUAR</button> 
            
            <br></br>
            <br></br>
            <label itemID="possuilogin">Já possui cadastro?</label>
            <button id="possuilogin" onClick={()=>{navigate('/login')}}>Faça seu Login</button>
          </div>
        </div>
      </div>
  );
}

export default Cadastro;