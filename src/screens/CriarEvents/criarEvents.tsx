import { Header } from "../../components/Header/header";
import "./criarEvents.css";
import { useForm, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../utils/api";
import newpicture from "../../assets/img/newpicture.png";


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
      .string()
      .required("A localização é necessário"),
    date: yup 
      .date()

  })
  .required();

export function CriarEvents(){
    const navigate = useNavigate();
    const [image, setImage] = useState<null | File>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ 
        resolver: yupResolver(schema),
    });
    
    function handleImageChange(image: React.ChangeEvent<HTMLInputElement>) {
        const file = image.target.files?.[0]
        if(file){
          setImage(file);
        }
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
    <div >
        <Header />
        <div className="body">
          <div className="boxCriarEvents">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="boxImg">
                  <label htmlFor="file-img" className="divUpload">
                    {image ? (
                        <img
                          src={URL.createObjectURL(image)}
                          alt="Imagem Selecionada"
                          className="previewImg"
                        />
                      ) : (
                        (
                          <div className="placeholder">
                            <img src={newpicture} className="newpicture" />
                          </div>
                        )
                      )
                    }
                  </label>
                  <input id="file-img" type="file"  accept="image/*" onChange={handleImageChange}/>
                </div>
                <div className="boxTitle">
                  <input type="text" {...register("title")} placeholder="Titulo do Evento"/><br />
                  <p style={{ color: "red" }}>{errors.title?.message}</p>
                </div>
                <div className="boxDescription">
                  <input type="text" {...register("description")} placeholder="Descrição" /> <br />
                  <p style={{ color: "red" }}>{errors.description?.message}</p>
                </div>
                <div className="boxTheme">
                  <label htmlFor="theme">Tipo De Evento:</label>
                  <select id="theme" required {...register("theme")}>
                    <option value="Congresso">Congresso</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Seminário">Seminario</option>
                    <option value="Palestra">Palestra</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Mostra">Mostra</option>
                  </select>
                </div>

                <div className="boxLocation">
                  <input type="text" {...register("location")}placeholder="Localidade" /><br />
                  <p style={{ color: "red" }}>{errors.location?.message}</p>
                </div>

                <div className="boxDate">
                  <input type="date" {...register("date")} placeholder="Data"/> <br />
                  <p style={{ color: "red" }}>{errors.date?.message}</p>
                </div>
                                
                  <button className="buttonCriar">Criar</button>
            </form>
          </div>
        </div>  
    </div>

  )
}

