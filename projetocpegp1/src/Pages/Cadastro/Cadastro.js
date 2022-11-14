import React from "react";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";

function Cadastro() {
  const navigate = useNavigate();
  return (
    <div className="background_cadastro">
      <div className="base">
        <div className="container_login">
          <img
            onClick={() => {
              navigate("/home");
            }}
            itemID="logogamecastinglogin"
            src="/images/logoGamecastingfundoroxo.png"
            alt="Gamecasting"
          ></img>
          <h1>Faça seu cadastro</h1>
          <div className="inputs">
            <label for="nomecadastro">Nome</label>
            <input
              type="text"
              itemID="nomecadastro"
              placeholder="Nome completo"
            ></input>
            <br />
            <label for="usuariocadastro">Usuário</label>
            <input
              type="text"
              itemID="usuariocadastro"
              placeholder="Nome de usuário"
            />
            <br />
            <label for="emailcadastro">Email</label>
            <input itemID="emailcadastro" type="text" placeholder="Email" />
            <br />
            <label for="senhacadastro">Senha</label>
            <input type="text" itemID="senhacadastro" placeholder="Senha" />
            <br />
            <label for="confirmesenhacadastro">Confirme sua Senha</label>
            <input
              type="text"
              itemID="confirmesenhacadastro"
              placeholder="Confirmar senha"
            />
            <br />
            <button
              class="button"
              onClick={() => {
                navigate("/cadastro/escolhaplano");
              }}
            >
              CONTINUAR
            </button>
          </div>
          <br></br>
          <br></br>
          <label itemitemID="possuilogin">Já possui cadastro?</label>
          <button
            itemID="possuilogin"
            onClick={() => {
              navigate("/login");
            }}
          >
            Faça seu Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
