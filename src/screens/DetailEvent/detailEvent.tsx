import { Header } from "../../components/Header/header";
import "./detailEvent.css";
import { cards } from "../../../data";
import calendar from "../../assets/img/calendar.png";
import location from "../../assets/img/location.png";

export function DetailEvent() {
  return (
    <>
      <Header />
      <div>
        <h1>{cards[0].tittle}</h1>

        <div id="details">
          <img src={cards[0].img2} />

          <div id="info">
            <div>
              <img src={calendar} />
              <p>{cards[0].date}</p>
            </div>

            <div>
              <img src={location} />
              <p>{cards[0].location}</p>
            </div>
          </div>
        </div>
        <div id="description">
          <div>
            <h2>Descrição</h2>
            <p>{cards[0].description2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
