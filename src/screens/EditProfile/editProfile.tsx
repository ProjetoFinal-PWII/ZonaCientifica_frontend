import "./editProfile.css";
import { Header } from "../../components/Header/header";
import picture from "../../assets/img/picture.png";
import iconEdit from "../../assets/img/iconEdit.png";
import { useAuth } from "../../contexts/auth";
import { api } from "../../utils/api";
import { useState } from "react";

export function EditProfile() {
  const context = useAuth();
  const [name, setName] = useState(context.user?.name)
  const [userName, setUserName] = useState(context.user?.name)
  const [phone, setPhone] = useState(context.user?.phone)
  const [email, setEmail] = useState(context.user?.email)
  
  function handleName(e) {
    setName(e.target.value)
  }
  function handleUserName(e) {
    setUserName(e.target.value)
  }
  function handlePhone (e) {
    setPhone(e.target.value)
  }
  function handleEmail (e) {
    setEmail(e.target.value)
  } 

  function editProfile() {
    context.edit(name, userName, phone, email, context.user?._id, context.user?.password)
  }
  
  return (
    <div id="bodyPageEditProfile">
      <Header />
      <div className="body">
        <div className="boxEditProfile">
          <div>
            <img src={picture} alt="picture" className="picture" />
            <button>
              <img src={iconEdit} alt="iconEdit" className="iconEdit" />
            </button>
          </div>

          <div>
            <input type="text" defaultValue={context.user?.name} onChange={handleName} placeholder="name"/>
          </div>

          <div>
            <input type="text" defaultValue={context.user?.userName} onChange={handleUserName} placeholder="name"/>
          </div>

          <div className="boxEditContact">
            <p className="contact">Contato</p>

            <div>
              <input type="text" defaultValue={context.user?.phone} onChange={handlePhone} placeholder="Telefone"/>
            </div>

            <div>
              <input type="text" defaultValue={context.user?.email} onChange={handleEmail} placeholder="Email"/>
            </div>
          </div>

          <button className="buttonSave" onClick={editProfile}>Salvar</button>
        </div>
      </div>
    </div>
  );
}