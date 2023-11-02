import { Header } from "../Header/header";
import "./events.css";
import buttonPrevious from "../../assets/img/previous.png";
import buttonNext from "../../assets/img/next.png";
import congressImage from "../../assets/img/congressImage.png";
import workshopImage from "../../assets/img/WorkshopImage.png";
import seminarImage from "../../assets/img/seminarImage.png";
import lectureImage from "../../assets/img/lectureImage.png";

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
              <li ><img src={congressImage}/></li>
              <li><img src={workshopImage}/></li>
              <li><img src={seminarImage}/></li>
              <li><img src={lectureImage}/></li>
            </ul>
          </div>
          <button>
            <img src={buttonNext} alt="Próximo" />
          </button>
        </div>
      </div>
      <div id="events">
        <h1>Eventos</h1>
      </div>
    </>
  );
}
