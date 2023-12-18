import "./card.css";

interface Event {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  location: string;
}
interface Props {
  event: Event;
}

export function Card({ event }: Props) {
  console.log(event);
  return (
    <>
      <div id="card">
        <img src={event.picture} alt="sertao comp" />
        <div id="info">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <h5>{event.date}</h5>
        </div>
      </div>
    </>
  );
}
