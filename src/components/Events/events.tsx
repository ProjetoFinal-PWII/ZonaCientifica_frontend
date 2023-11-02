import { Header } from "../Header/header";
import "./events.css";
import buttonPrevious from "../../assets/img/previous.png";
import buttonNext from "../../assets/img/next.png";
import { Card } from "./card";

export function Events() {
  return (
    <>
      <Header />
      <div id="category">
        <h1>Categorias</h1>
        <div id="categories">
          <button>
            <img src={buttonPrevious} alt="Anterior" />
          </button>
          <div id="listCategories">
            <ul>
              <li>
                <div>Congresso</div>
              </li>
              <li>
                <div>Workshop</div>
              </li>
              <li>
                <div>Seminário</div>
              </li>
              <li>
                <div>Palestra</div>
              </li>
            </ul>
          </div>
          <button>
            <img src={buttonNext} alt="Próximo" />
          </button>
        </div>
      </div>
      <div id="event">
        <h1>Eventos</h1>
        <div id="events">
          <Card/>
        </div>
      </div>
    </>
  );
}
