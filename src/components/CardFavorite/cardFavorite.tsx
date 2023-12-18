import "./cardFavorite.css";
import { FaHeart } from "react-icons/fa6";
import { api } from "../../utils/api";

interface Event {
  id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  location: string;
}
interface Props {
  event: Event;
}
export function CardFavorite({ event }: Props) {
  async function deleteFavorite() {
    try {
      api.post("/deleteFavorite", {
        email: "guilherme@gmail.com",
        id: event.id,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  return (
    <>
      <div id="card">
        <img src={event.picture} alt="sertao comp" />
        <div id="info">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <h5>{event.date}</h5>
        </div>
        <button onClick={deleteFavorite}>
          <FaHeart id="redHeart" />
        </button>
      </div>
    </>
  );
}
