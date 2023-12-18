import "./signUp.css";
import logo from "../../assets/img/Logo.png";
import { Header } from "../../components/Header/header";

export function SignUp() {
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
          <label className="label2">Email</label>
          <input type="text"></input>
        </div>

        <div className="input3">
          <label className="label3">Senha</label>
          <input type="text"></input>
        </div>

        <button>Cadastrar</button>

        <a href="">
          <p>Já possui uma conta?</p>
          <p>Clique aqui para entrar!</p>
        </a>
      </div>
    </>
  );
}
