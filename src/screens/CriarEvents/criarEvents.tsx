import { Header } from "../../components/Header/header";
import "./criarEvents.css";
import { useAuth } from "../../contexts/auth";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../utils/api";

const schema = yup
  .object({
    title: yup.string().required("O nome é necessário").max(70, "Nome grande o suficiente"),
    description: yup
      .string()
      .required("A descrição é necessário"),
    theme: yup
      .string()
      .required("O Tema é necessário"),
    location: yup
      .string(),
    date: yup 
      .date(),

  })
  .required();

export function CriarEvents(){
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ 
        resolver: yupResolver(schema),
    });
    
    function handleImageChange(image) {
        const file = image.target.files[0];
        setImage(file);
    }
    
    function onSubmit(data: FieldValues) {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('theme', data.theme);
        formData.append('location', data.location);
        formData.append('date', data.date)
        if(image){
          formData.append('picture', image);
        }
        createEvent(formData)
        navigate("/events")
    }

    async function createEvent(formData: FormData) {
        await api.post("/event", formData, {
            headers: {
                'Contente_Type': 'multipart/form-data',
            }
        }).catch((error) => console.error('Erro ao criar Evento: ', error))
    }
    
    
    
  return (
    <div>
        <Header />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("title")} placeholder="Titulo do Evento"/><br />
            <p style={{ color: "red" }}>{errors.title?.message}</p>
            <input type="text" {...register("description")} placeholder="Descrição" /> <br />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
            <input type="text" {...register("theme")} placeholder="Tema"/> <br />
            <p style={{ color: "red" }}>{errors.theme?.message}</p>
            <input type="text" {...register("location")}placeholder="Localidade" /><br />
            <p style={{ color: "red" }}>{errors.location?.message}</p>
            <input type="date" {...register("date")} placeholder="Data" /> <br />
            <p style={{ color: "red" }}>{errors.date?.message}</p>
            <input type="file"  accept="image/*" onChange={handleImageChange}/>

            <button>Criar</button>
        </form>
    </div>

  )
}