import "./editProfile.css";
import { Header } from "../../components/Header/header";
import picture from "../../assets/img/picture.png";
import iconEdit from "../../assets/img/iconEdit.png";
import { useAuth } from "../../contexts/auth";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required("O nome é necessário").max(70, "Nome grande o suficiente"),
    email: yup
      .string()
      .required("O e-mail é necessário")
      .matches(/^\b[A-Z0-9._%-]+@[A-Z0-9*-]+\.[A-Z]{2,4}\b$/i, "Formato de e-mail inválido"),
    phone: yup
      .string()
      .matches(/^\d{10,11}$/, "O telefone deve ter 10 ou 11 dígitos e conter apenas números"),
    userName: yup
      .string()
      .min(3, "O nome de usuário deve ter pelo menos 3 caracteres")
      .max(30, "O nome de usuário deve ter no máximo 30 caracteres"),
  })
  .required();

export function EditProfile() {
  const context = useAuth();
  const navigate = useNavigate()
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ 
    resolver: yupResolver(schema),
    defaultValues: {
      name: context.user?.name,
      email: context.user?.email,
      phone: context.user?.phone,
      userName: context.user?.userName,
    }
  });

  function onSubmit(data: FieldValues) {
    context.edit(data.name, data.userName, data.phone, data.email, context.user?._id || "")
    updateProfile();
  }

  function updateProfile() {
    navigate("/editProfile")
  }

  return (
    <div id="bodyPageEditProfile">
      <Header />
      <div className="body">
        <div className="boxEditProfile">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <img src={picture} alt="picture" className="picture" />
              <button>
                <img src={iconEdit} alt="iconEdit" className="iconEdit" />
              </button>
            </div>

            <div>
              <input type="text" {...register("name")}  placeholder="Nome"/>
              <p style={{ color: "red" }}>{errors.name?.message}</p>
            </div>

            <div>
              <input type="text" {...register("userName")}  placeholder="Nome"/>
              <p style={{ color: "red" }}>{errors.userName?.message}</p>
            </div>

            <div className="boxEditContact">
              <p className="contact">Contato</p>

              <div>
                <input type="text" {...register("phone")} placeholder="Telefone"/>
                <p style={{ color: "red" }}>{errors.phone?.message}</p>
              </div>

              <div>
                <input type="text" {...register("email")}  placeholder="Email"/>
                <p style={{ color: "red" }}>{errors.email?.message}</p>
              </div>
              
              <button onClick={updateProfile}>Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}