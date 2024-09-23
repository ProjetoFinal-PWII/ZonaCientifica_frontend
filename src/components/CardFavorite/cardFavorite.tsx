import "./cardFavorite.css";
import { FaHeart } from "react-icons/fa6";
import { api } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

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
  const context = useAuth();
  const navigate = useNavigate();
  async function deleteFavorite() {
    try {
      api.post("/deleteFavorite", {
        email: context.user?.email,
        id: event.id,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  function navDetailEvent() {
    navigate("/detailEvent", {
      state: {
        eventId: event.id,
        eventPicture: event.picture,
        eventTitle: event.title,
        eventDescription: event.description,
        eventDate: event.date,
        eventLocation: event.location,
      },
    });
  }
  return (
    <div id="cardFavorite">
      <button id="buttonCard" onClick={navDetailEvent}>
        <img src={event.picture} alt="sertao comp" />
        <div id="infoFavorite">
          <p>{event.title}</p>
          <p>{event.description}</p>
          <p>{event.date}</p>
        </div>
      </button>
      <button id="buttonCardFavorite" onClick={deleteFavorite}>
        <FaHeart id="redHeart" />
      </button>
    </div>
  );
}
