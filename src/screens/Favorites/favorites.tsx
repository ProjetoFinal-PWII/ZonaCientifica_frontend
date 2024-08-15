/* eslint-disable react-hooks/exhaustive-deps */
import "./favorites.css";
import { Header } from "../../components/Header/header";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";
import { CardFavorite } from "../../components/CardFavorite/cardFavorite";
import { useAuth } from "../../contexts/auth";

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
  const [favorites, setFavorites] = useState<Events[] | null>(null);
  const [loading, setLoading] = useState(true);
  const context = useAuth();

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

  useEffect(() => {
    findFavorites();
    if(favorites){
      setLoading(false);
    }
  }, [favorites]);

  return (
    <div id="bodyPageFavorites">
      <Header />
      <div id="favorites">
        <h1>Meus Favoritos</h1>
        <div id="eventFavorite">
          {loading?
            (<h1>carregando...</h1>)
            : (

                favorites!.length > 0 ? (
                favorites!.map((favorite) => {
                  return <CardFavorite key={favorite.id} event={favorite} />;
                })  
              ) : (
                <h2>Você ainda não tem eventos favoritos. Favorite algum evento!</h2>
              )
        
            )
          }
      
        </div>
      </div>
    </div>
  );
}
