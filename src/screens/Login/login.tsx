import "./login.css";
import logo from "../../assets/img/Logo.png";
import { Header } from "../../components/Header/header";

export function Login() {
  return (
    <>
      <Header />
      <div id="form">
        <img src={logo} className="logo" />

        <div className="input1">
          <label className="label1">Usuário</label>
          <input type="text"></input>
        </div>

        <div className="input2">
          <label className="label2">Senha</label>
          <input type="text"></input>
        </div>

        <button>Entrar</button>

        <a href="">
          <p>Não possui uma conta?</p>
          <p>Clique aqui para Cadastrar-se!</p>
        </a>
      </div>
    </>
  );
}
