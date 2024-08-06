import "./header.css";
import logo from "../../assets/img/Logo.png";
import bars from "../../assets/img/bars.png";
import calendar from "../../assets/img/calendar.png";
import map from "../../assets/img/map.png";
import heart from "../../assets/img/heart.png";
import award from "../../assets/img/award.png";
import home from "../../assets/img/home.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

export function Header() {
  const navigate = useNavigate();
  const context = useAuth();

  function navEvents() {
    navigate("/events");
  }
  function navFavorito() {
    navigate("/favorites");
  }
  function navParticipating() {
    navigate("/participating");
  }
  function navProfile() {
    navigate("/profile");
  }
  function logout() {
    context.logout();
    navigate("/");
  }
  return (
    <>
      <header id="header">
        <div id="menuLateral">
          <label htmlFor="toogle">
            <img src={bars} />
          </label>
          <input id="toogle" type="checkbox" name="menu" />
          <div id="buttons">
            <nav>
              <ul>
                <li>
                  <button onClick={navEvents}>
                    <img src={calendar} alt="Eventos" /> Eventos
                  </button>
                </li>
                <li>
                  <button>
                    <img src={map} alt="Mapa" /> Mapa
                  </button>
                </li>
                <li>
                  <button onClick={navFavorito}>
                    <img src={heart} alt="Favoritos" /> Favoritos
                  </button>
                </li>
                <li>
                  <button onClick={navParticipating}>
                    <img src={award} alt="Participando" /> Participando
                  </button>
                </li>
                <li>
                  <button onClick={navProfile}>
                    <img src={home} alt="Perfil" /> Perfil
                  </button>
                </li>
                <li>
                  <button onClick={logout}>Sair</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <a href="">
          <img src={logo} />
        </a>
      </header>
      {/*<header id="header">
        <button onClick={navEvents}>Eventos</button>
        <button onClick={navFavorito}>Favoritos</button>
        <button onClick={navParticipating}>Participando</button>
        <button onClick={logout}>Sair</button>
        <a href="">
          <img src={logo} />
        </a>
      </header>*/}
    </>
  );
}
