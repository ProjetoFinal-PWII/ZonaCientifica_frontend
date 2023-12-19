import "./profile.css";
import { Header } from "../../components/Header/header";
import picture from "../../assets/img/picture.png";
import edit from "../../assets/img/edit.png";
import instagram from "../../assets/img/Instagram.png";
import twitter from "../../assets/img/Twitter.png";
import facebook from "../../assets/img/Facebook.png";
import likedin from "../../assets/img/LikedIn.png";
import { useNavigate } from "react-router-dom";

export function Profile() {
  const navigate = useNavigate();

  function navFavorito() {
    navigate("/favorites");
  }
  function navParticipating() {
    navigate("/participating");
  }
  return (
    <>
      <Header />
      <div className="bodyProfile">
        <div className="boxProfile">
          <img src={picture} alt="picture" className="picture" />
          <p className="name">Leonardo Mendes</p>
          <p>@Leonardo</p>
          <button className="edit">
            <img src={edit} alt="edit" />
          </button>
        </div>

        <div id="info">
          <div className="boxContact">
            <p>Contato</p>
            <p>88 9 96647341</p>
            <p>mendes.leonardo@academico.com</p>
          </div>

          <div className="boxIcons">
            <button>
              <img src={instagram} alt="instagram" className="icons" />
            </button>
            <button>
              <img src={twitter} alt="twitter" className="icons" />
            </button>
            <button>
              <img src={facebook} alt="facebook" className="icons" />
            </button>
            <button>
              <img src={likedin} alt="likedIn" className="icons" />
            </button>
          </div>
        </div>

        <div className="boxButtons">
          <button onClick={navFavorito}>Favoritos</button>
          <button onClick={navParticipating}>Participando</button>
        </div>
      </div>
    </>
  );
}
