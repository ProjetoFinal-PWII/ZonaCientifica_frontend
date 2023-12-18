import "./login.css";
import logo from "../../assets/img/Logo.png";
import { Header } from "../../components/Header/header";
import { useForm, FieldValues } from "react-hook-form";
import { useAuth } from "../../contexts/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Informe o e-mail")
      .matches(
        /^\b[A-Z0-9._%-]+@[A-Z0-9*-]+\.[A-Z]{2,4}\b$/i,
        "Formato de e-mail inválido"
      )
      .nonNullable(),
    password: yup
      .string()
      .required("Informe a senha")
      .nonNullable()
      .min(6, "A senha tem no mínimo 6 caracteres"),
  })
  .required();

export function Login() {
  const context = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data: FieldValues) {
    context.login(data.email, data.password);
    if (context.user) {
      profile();
    } else {
      window.alert("Usuário não encontrado ou dados incorretos.");
    }
  }

  /*function signUpScreen() {
    navigation.navigate("SignUp");
  }
  */

  function profile() {}

  return (
    <>
      <Header />
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} className="logo" />

        <div className="input1">
          <label className="label1">E-mail</label>
          <input type="text" {...register("email")}></input>
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        <div className="input2">
          <label className="label2">Senha</label>
          <input type="text" {...register("password")}></input>
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <button type="submit">Entrar</button>

        <a href="">
          <p>Não possui uma conta?</p>
          <p>Clique aqui para Cadastrar-se!</p>
        </a>
      </form>
    </>
  );
}
