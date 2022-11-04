import React from "react"
import "./escolhaplano.css";

function EscolhaPlano(){
    return(
      <div className="background_planos">
        <div className="base">
        <div className="container"> 
        <h1> Selecione o plano de interesse</h1>
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
      </div>
        </div>
    );
}

export default EscolhaPlano;