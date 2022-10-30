import React from "react"
import "./escolhaplano.css";

function EscolhaPlano(){
    return(
      <div className="background_planos">
        <div>
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
      </div>
        
    );
}

export default EscolhaPlano;