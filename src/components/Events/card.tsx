import "./card.css";
import {cards} from "../../../data";

export function Card(){
    return (
        <>
        <div id="card">
            <img src={cards[0].img} alt="sertao comp" />
            <div id="info">
              <h3>{cards[0].tittle}</h3>
              <p>
                {cards[0].description}
              </p>
              <h5>{cards[0].date}</h5>
            </div>
          </div>
          <div id="card">
            <img src={cards[1].img} alt="sertao comp" />
            <div id="info">
              <h3>{cards[1].tittle}</h3>
              <p>
              {cards[1].description}
              </p>
              <h5>{cards[1].date}</h5>
            </div>
          </div>
          </>
    )
}