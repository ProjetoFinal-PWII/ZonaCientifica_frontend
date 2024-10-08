import "./participating.css";
import { Header } from "../../components/Header/header";
import { Card } from "../../components/Card/card";
import { api } from "../../utils/api";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";

type Events = {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string;
  location: string;
};
export function Participating() {
  const [participating, setParticipating] = useState<Events[] | null>(null);
  const [loading, setLoading] = useState(true);
  const context = useAuth();

  async function findParticipating() {
    try {
      api
        .post("/getParticipatingList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.participatingList;
          setParticipating(list);
          setLoading(false);
        });
    } catch (error) {
      console.log("ERRO: " + error);
      setLoading(false);
    }
  }
  useEffect(() => {
    findParticipating();
    if(participating){
      setLoading(false)
    }
  }, [participating]);
  
  return (
    <div id="bodyPageParticipating">
      <Header />
      <div id="participating">
        <h1>Participando</h1>
        <div id="eventParticipating">
          {loading ?
            <div id="loadingPageParticipating"></div>
            :
            (
              participating!.length > 0 ? (
                participating!.map((value: Events) => {
                  return <Card key={value._id} event={value} />;
                })
              ) : (
                <h2>Você não está em nenhum evento ainda.
                Participe de um!</h2>
              )
            )
          }
        </div>
      </div>
    </div>
  );
}
