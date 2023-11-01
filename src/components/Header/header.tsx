import "./header.css";
import logo from "../../assets/img/Logo.png";

export function Header() {
  return (
    <>
      <header id="header">
        <a href="">
          <img src={logo} />
        </a>
      </header>
    </>
  );
}
