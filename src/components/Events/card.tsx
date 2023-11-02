import "./card.css";

type Props = {
  img: string,
  tittle: string,
  description: string,
  date: string,
}

export function Card({ img, tittle, description, date }:Props) {
  return (
    <>
      <div id="card">
        <img src={img} alt="sertao comp" />
        <div id="info">
          <h3>{tittle}</h3>
          <p>{description}</p>
          <h5>{date}</h5>
        </div>
      </div>
    </>
  );
}
