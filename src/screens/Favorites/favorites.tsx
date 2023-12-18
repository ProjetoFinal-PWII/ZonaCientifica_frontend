import "./favorites.css";
import { Header } from "../../components/Header/header";
import { cards } from "../../../data";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";
import { CardFavorite } from "../../components/CardFavorite/cardFavorite";

type Events = {
  id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string;
  location: string;
};

export function Favorites() {
  const [favorites, setFavorites] = useState<Events[]>([]);
  //const context = useAuth();

  async function findFavorites() {
    try {
      api
        .post("/getFavoriteList", { email: "guilherme@gmail.com" })
        .then((res) => {
          const list = res.data.favoriteList;
          setFavorites(list);
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  useEffect(() => {
    findFavorites();
  });
  return (
    <>
      <Header />
      <div id="event">
        <h1>Meus Favoritos</h1>
        <div id="events">
          {favorites.map((favorite) => {
            return <CardFavorite key={favorite.id} event={favorite} />;
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
