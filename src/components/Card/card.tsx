import { useEffect, useState } from "react";
import "./card.css";
import { api } from "../../utils/api";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

interface Event {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  location: string;
}
type Favorite = {
  id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  location: string;
};
interface Props {
  event: Event;
}

export function Card({ event }: Props) {
  const [favorite, setFavorite] = useState(false);

  async function findFavorites() {
    try {
      api
        .post("/getFavoriteList", { email: "guilherme@gmail.com" })
        .then((res) => {
          const list = res.data.favoriteList;
          list.map((favorite: Favorite) => {
            if (favorite.id === event._id) {
              setFavorite(true);
            }
          });
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function addFavorite() {
    try {
      api.post("/addFavorite", {
        email: "guilherme@gmail.com",
        id: event._id,
        title: event.title,
        picture: event.picture,
        description: event.description,
        date: event.date,
        location: event.location,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function deleteFavorite() {
    try {
      api.post("/deleteFavorite", {
        email: "guilherme@gmail.com",
        id: event._id,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function changeFavorite() {
    if (favorite === true) {
      deleteFavorite();
      setFavorite(false);
    } else {
      addFavorite();
      setFavorite(true);
    }
  }

  useEffect(() => {
    setFavorite(false);
    findFavorites();
  }, []);
  return (
    <>
      <div id="card">
        <img src={event.picture} alt="sertao comp" />
        <div id="info">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <h5>{event.date}</h5>
        </div>
        {favorite === true ? (
          <button onClick={changeFavorite}>
            <FaHeart id="redHeart" />
          </button>
        ) : (
          <button onClick={changeFavorite}>
            <CiHeart id="heart" />
          </button>
        )}
      </div>
    </>
  );
}
