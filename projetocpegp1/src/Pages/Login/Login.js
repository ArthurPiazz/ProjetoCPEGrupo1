import React from 'react';
import "./Login.css" ;

function Login(){
    return(
    <div className='base'>
        <div className="container">
            <form>
                
                <div className="inputs">
                    <h2>Login</h2>
                    <input placeholder="Email"/>
                    <br></br>
                    <input placeholder="Senha"/>
                    <br></br>
                    <button>Login</button>
                </div>
            </form>       
        </div>
    </div>   
);
}

export default Login;