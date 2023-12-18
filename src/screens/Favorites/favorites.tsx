import "./favorites.css";
import { Header } from "../../components/Header/header";
import { Card } from "../../components/Card/card";
import { cards } from "../../../data";
import { api } from "../../utils/api";
import { useState } from "react";

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
        .post("/getFavoriteList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.favoriteList;
          setFavorites(list);
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  useFocusEffect(() => {
    findFavorites();
  });
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
  );
}
function useFocusEffect(arg0: () => void) {
  throw new Error("Function not implemented.");
}
