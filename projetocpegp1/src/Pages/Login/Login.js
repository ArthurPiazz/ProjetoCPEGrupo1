import React from 'react';

import "./Login.css" ;
import {useNavigate} from "react-router-dom";



 
function Login(){
    const navigate = useNavigate()

    return(

    <div className="base">
        <div className="container">
        <h1>LOGIN</h1>
        <img src= "/images/Rectangle 3.png" alt = "Rectangle 3"/>
        <form className="inputs"/>
        <input></input>
        <input></input>
        <br/>
        <div className="button">   
        </div>
        
        <br/>
        <h1>Novo na plataforma?</h1>
        <br/>
        <button onClick={()=>{navigate('/cadastro')}}><img src= "/images/Clique_Aqui.png" alt = "Clique_Aqui"/></button>
        </div>
    </div>

);
}

export default Login;