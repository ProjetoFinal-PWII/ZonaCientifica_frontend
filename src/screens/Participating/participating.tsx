import "./participating.css";
import { Header } from "../../components/Header/header";
import { Card } from "../../components/Card/card";
import { cards } from "../../../data";

export function Participating() {
  return (
    <>
      <Header />
      <div id="event">
        <h1>Participando</h1>
        <div id="events">
          {cards.map((card) => {
            return (
              <Card
                img={card.img}
                tittle={card.tittle}
                description={card.description}
                date={card.date}
              />
            );
          })}
          {cards.length === 0 && (
            <>
              <h3>Sem eventos.</h3>
            </>
          )}
        </div>
      </div>
    </>
  );
}
