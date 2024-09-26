import "./editProfile.css";
import { Header } from "../../components/Header/header";
import { useAuth } from "../../contexts/auth";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import newpicture from "../../assets/img/newpicture.png";

const schema = yup
  .object({
    name: yup
      .string()
      .required("O nome é necessário")
      .max(70, "Nome grande o suficiente"),
    email: yup
      .string()
      .required("O e-mail é necessário")
      .matches(
        /^\b[A-Z0-9._%-]+@[A-Z0-9*-]+\.[A-Z]{2,4}\b$/i,
        "Formato de e-mail inválido"
      ),
    phone: yup
      .string()
      .matches(
        /^\d{10,11}$/,
        "O telefone deve ter 10 ou 11 dígitos e conter apenas números"
      ),
    userName: yup
      .string()
      .min(3, "O nome de usuário deve ter pelo menos 3 caracteres")
      .max(30, "O nome de usuário deve ter no máximo 30 caracteres"),
  })
  .required();

export function EditProfile() {
  const context = useAuth();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

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
    },
  });

  function handleImageChange(image) {
    const file = image.target.files[0];
    setImage(file);
  }

  function onSubmit(data: FieldValues) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("userName", data.userName);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    if (context.user?._id) {
      formData.append("_id", context.user?._id);
    }
    if (image) {
      formData.append("picture", image);
    }

    context.edit(formData);
    updateProfile();
  }

  function updateProfile() {
    navigate("/editProfile");
  }
  const picture = context.user?.picture;

  return (
    <div id="bodyPageEditProfile">
      <Header />
      <div className="body">
        <div className="boxEditProfile">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="boxImage">
              <label htmlFor="file-upload" className="divUpload">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Imagem Selecionada"
                    className="previewImage"
                  />
                ) : picture ? (
                  <img src={`http://localhost:3000/uploads/${picture}`} className="previewImage" />
                ) : (
                  (
                    <div className="placeholder">
                      <img src={newpicture} className="newpicture" />
                    </div>
                  )
                )
                }
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div id="editInformations">
              
              <div className="editName">
                <input type="text" {...register("name")} placeholder="Nome" />
                <p style={{ color: "red" }}>{errors.name?.message}</p>
              </div>

              <div className="editUserName">
                <input
                  type="text"
                  {...register("userName")}
                  placeholder="Username"
                />
                <p style={{ color: "red" }}>{errors.userName?.message}</p>
              </div>

              <div className="boxEditContact">
                <p className="contact">Contato</p>

                <div className="editPhone">
                  <input
                    type="text"
                    {...register("phone")}
                    placeholder="Telefone"
                  />
                  <p style={{ color: "red" }}>{errors.phone?.message}</p>
                </div>

                <div className="editEmail">
                  <input
                    type="text"
                    {...register("email")}
                    placeholder="Email"
                  />
                  <p style={{ color: "red" }}>{errors.email?.message}</p>
                </div>
              </div>
            </div>

            <button onClick={updateProfile}>Salvar</button>

          </form>
        </div>
      </div>
    </div>
  );
}
