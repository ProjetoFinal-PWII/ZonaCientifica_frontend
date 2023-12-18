import "./participating.css";
import { Header } from "../../components/Header/header";
import { Card } from "../../components/Card/card";
import { cards } from "../../../data";
import { api } from "../../utils/api";
import { useState } from "react";

export function Participating() {
  const [participating, setParticipating] = useState<[]>([]);
  //const context = useAuth();

  async function findParticipating() {
    try {
      api
        .post("/getParticipatingList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.participatingList;
          setParticipating(list);
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  useFocusEffect(() => {
    findParticipating();
  });
  return (
    <>
      <Header />
      <div id="event">
        <h1>Participando</h1>
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
