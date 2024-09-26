import "./profile.css";
import { Header } from "../../components/Header/header";
import edit from "../../assets/img/edit.png";
import instagram from "../../assets/img/Instagram.png";
import twitter from "../../assets/img/Twitter.png";
import facebook from "../../assets/img/Facebook.png";
import likedin from "../../assets/img/LikedIn.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export function Profile() {
  const navigate = useNavigate();
  const context = useAuth();

  function navFavorito() {
    navigate("/favorites");
  }
  function navParticipating() {
    navigate("/participating");
  }
  function navEditProfile() {
    navigate("/editProfile");
  }

  const picture = context.user?.picture
  
  return (
    <div id="bodyPageProfile">
      <Header />
      <div className="bodyProfile">
        <div className="boxProfile">
          <div className="divProfile">
            {picture ? (
              <img src={`http://localhost:3000/uploads/${picture}`} alt="picture" className="pictureProfile" />
            ) : (
              <div className="placeholder">
                  <p>Você está sem foto</p>
              </div>
            )}
          </div>
          <p className="nameProfile">{context.user?.name}</p>
          <p>@{context.user?.name}</p>
          <button className="edit" onClick={navEditProfile}>
            <img src={edit} alt="edit" />
          </button>
        </div>

        <div id="informations">
          <div className="boxContact">
            <p>Contato</p>
            <p>{context.user?.phone}</p>
            <p>{context.user?.email}</p>
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
    </div>
  );
}
