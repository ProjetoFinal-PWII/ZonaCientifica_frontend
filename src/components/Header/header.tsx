import "./header.css";
import logo from "../../assets/img/Logo.png";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function navEvents() {
    navigate("/events");
  }
  function navFavorito() {
    navigate("/favorites");
  }
  function navParticipating() {
    navigate("/participating");
  }
  return (
    <>
      <header id="header">
        <button onClick={navEvents}>Eventos</button>
        <button onClick={navFavorito}>Favoritos</button>
        <button onClick={navParticipating}>Participando</button>
        <a href="">
          <img src={logo} />
        </a>
      </header>
    </>
  );
}
