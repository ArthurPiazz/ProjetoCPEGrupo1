import React from 'react';
import {useNavigate} from "react-router-dom";


 
function Login(){
    const navigate = useNavigate()

    return(
    <div> 
    <h1>LOGIN</h1>
    <br/>
    <button onClick={()=>{navigate('/usuario')}}>ENTRAR</button>
    </div>
);
}

export default Login;