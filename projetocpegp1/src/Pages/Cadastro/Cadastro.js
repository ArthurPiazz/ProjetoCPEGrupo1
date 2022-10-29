import React from 'react';
import {useNavigate} from "react-router-dom";



function Cadastro() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Cadastre-se já</h1>
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
  );
}

export default Cadastro;