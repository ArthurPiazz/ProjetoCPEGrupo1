import React from 'react';


function App() {
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
      <button> CONTINUAR </button>
      <h2> Selecione o plano de interesse</h2>
      <h2>Starter</h2>
      <input  id = "STR" type = "radio" name = "plano"/>
      <br/>
      <h2>Medium</h2>
      <input  id = "MID" type = "radio" name = "plano"/>
      <br/>
      <h2>Pro</h2>
      <input  id = "PRO" type = "radio" name = "plano"/>
      <br/>
      <h2>Ultimate</h2>
      <input  id = "UTM" type = "radio" name = "plano"/>
      <br/>

    </div>
  );
}

export default App;