import "./login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="background_login">
      <div className="base">
        <div className="container_login">
          <div class="titulologin">
            <img
              onClick={() => {
                navigate("/home");
              }}
              id="logogamecastinglogin"
              src="/images/logoGamecastingfundoroxo.png"
              alt="Gamecasting"
            ></img>
          </div>
          
          <form className="inputs">
            <label itemID="email">Email</label>
            <input
              type="text"
              className="email"
              placeholder="Digite seu Email"
            ></input>
            <br></br>
            <label itemID="senha">Senha</label>
            <input
              type="password"
              className="senha"
              placeholder="Digite sua senha"
            ></input>
          </form>
          <br />
          <button
            class="button"
            onClick={() => {
              navigate("/plataforma");
            }}
          >
            ENTRAR
          </button>
          <br />
          <label itemID="esqueciasenha">Novo na plataforma?</label>
          <button
            id="esqueciasenha"
            onClick={() => {
              navigate("/cadastro");
            }}
          >
            Clique Aqui
          </button>
        </div>

        <br />
      </div>
    </div>
  );
}

export default Login;
