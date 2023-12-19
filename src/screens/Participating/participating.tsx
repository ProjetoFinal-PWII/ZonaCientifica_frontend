import "./participating.css";
import { Header } from "../../components/Header/header";
import { Card } from "../../components/Card/card";
import { cards } from "../../../data";
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
  const [participating, setParticipating] = useState<[]>([]);
  const context = useAuth();

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
  useEffect(() => {
    findParticipating();
  });
  return (
    <>
      <Header />
      <div id="event">
        <h1>Participando</h1>
        <div id="events">
          {participating.map((value: Events) => {
            return <Card key={value._id} event={value} />;
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
