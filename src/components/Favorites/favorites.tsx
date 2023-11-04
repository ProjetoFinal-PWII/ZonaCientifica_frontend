import './favorites.css'
import { Header } from "../Header/header"
import { Card } from '../Events/card';
import { cards } from '../../../data';

export function Favorites(){
  return (
    <>
      <Header />
      <div id="event">
        <h1>Meus Favoritos</h1>
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
  )
}