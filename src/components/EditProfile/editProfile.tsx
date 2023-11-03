import './editProfile.css'
import { Header } from "../Header/header"
import picture from "../../assets/img/picture.png";
import iconEdit from "../../assets/img/iconEdit.png"
import edit from "../../assets/img/edit.png"

export function EditProfile(){
  return (
    <>
      <Header />
      <div className="body">
        <div className="boxEditProfile">
          <div>
            <img src={picture} alt="picture" className='picture'/>
            <button>
              <img src={iconEdit} alt="iconEdit" className='iconEdit'/>
            </button>
          </div>

          <div>
            <p className="name">Leonardo Mendes</p>
            <button>
              <img src={iconEdit} alt="iconEdit" className='iconEdit'/>
            </button>
          </div>

          <div>
            <p className='user'>Leonardo</p>
            <button>
              <img src={iconEdit} alt="iconEdit" className='iconEdit'/>
            </button>
          </div>

          <div className="boxContact">
            <p className='contact'>Contato</p>

            <div>
              <p className='number'>88 9 96647341</p>
              <button>
                <img src={iconEdit} alt="iconEdit" className='iconEdit'/>
              </button>
            </div>

            <div>
              <p className='email'>mendes.leonardo@academico.com</p>
              <button>
                <img src={iconEdit} alt="iconEdit" className='iconEdit'/>
              </button>
            </div>

          </div>

          <button className='buttonEdit'><img src={edit} alt="edit" /></button>
        </div>
      </div>
    </>
  )
}