import "./signUp.css";
import logo from "../../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { useAuth } from "../../contexts/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("O nome é necessário").max(70, "Nome grande o suficiente"),
    email: yup
      .string()
      .required("O e-mail é necessário")
      .matches(/^\b[A-Z0-9._%-]+@[A-Z0-9*-]+\.[A-Z]{2,4}\b$/i, "Formato de e-mail inválido"),
    password: yup
      .string()
      .required("A senha é necessária")
      .min(6, "A senha deve ter mínimo de 6 caracteres"),
  })
  .required();

export function SignUp() {
  const context = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data: FieldValues) {
    context.signup(data.name, data.email, data.password);
    loginScreen();
  }

  function loginScreen() {
    navigate("/");
  }

  return (
    <div id="bodyPageSignUp">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} className="logoSignUp" />

        <div className="input1SignUp">
          <label className="labelName">Nome completo</label>
          <input type="text" {...register("name")} placeholder="Seu nome"></input>
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        <div className="input2SignUp">
          <label className="labelEmail">Email</label>
          <input type="text" {...register("email")} placeholder="Seu email"></input>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div className="input3SignUp">
          <label className="labelPassword">Senha</label>
          <input type="password" {...register("password")} placeholder="Sua senha"></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <button className="buttonSignUp">Cadastrar</button>

        <a className="toLogin" onClick={loginScreen}>
          <p>Já possui uma conta?</p>
          <p>Clique aqui para entrar!</p>
        </a>
      </form>
    </div>
  );
}
