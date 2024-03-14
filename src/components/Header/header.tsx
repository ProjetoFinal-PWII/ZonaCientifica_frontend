import "./header.css";
import logo from "../../assets/img/Logo.png";
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
  function logout() {
    context.logout();
    navigate("/");
  }
  return (
    <>
      <header id="header">
        <button onClick={navEvents}>Eventos</button>
        <button onClick={navFavorito}>Favoritos</button>
        <button onClick={navParticipating}>Participando</button>
        <button onClick={logout}>Sair</button>
        <a href="">
          <img src={logo} />
        </a>
      </header>
    </>
  );
}
