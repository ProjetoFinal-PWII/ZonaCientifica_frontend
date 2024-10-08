import { Header } from "../../components/Header/header";
import "./detailEvent.css";
import calendar_white from "../../assets/img/calendar_white.png";
import location from "../../assets/img/location.png";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { useAuth } from "../../contexts/auth";
import { useLocation } from "react-router-dom";

type Events = {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string;
  location: string;
};

export function DetailEvent() {
  const [participating, setParticipating] = useState(false);
  const context = useAuth();
  const { state } = useLocation();

  async function findParticipating() {
    try {
      api
        .post("/getParticipatingList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.participatingList;
          console.log(state)
          list.map((participating: Events) => {
            if (participating._id === state.eventId) {
              setParticipating(true);
            }
          });
        });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function addParticipating() {
    try {
      api.post("/addParticipating", {
        email: context.user?.email,
        _id: state.eventId,
        title: state.eventTitle,
        picture: state.eventPicture,
        description: state.eventDescription,
        date: state.eventDate,
        location: state.eventLocation,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function deleteParticipating() {
    try {
      api.post("/deleteParticipating", {
        email: context.user?.email,
        _id: state.eventId,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function changeParticipating() {
    if (participating === true) {
      deleteParticipating();
      setParticipating(false);
    } else {
      addParticipating();
      setParticipating(true);
    }
  }
  const data = new Date(state.eventDate);

  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  const newDate = `${dia}/${mes}/${ano}`

  useEffect(() => {
    setParticipating(false);
    findParticipating();
  }, []);
  return (
    <div id="bodyPageDetailEvent">
      <Header />
      <div>
        <h1>{state.eventTitle}</h1>

        <div id="details">
          <img src={`http://localhost:3000/uploads/${state.eventPicture}`} />

          <div id="info">
            <div>
              <img src={calendar_white} />
              <p>{newDate}</p>
            </div>

            <div>
              <img src={location} />
              <p>{state.eventLocation}</p>
            </div>
            <div id="buttonParticipate">
              {participating === true ? (
                <button className="activated" onClick={changeParticipating}>
                  Cancelar participação
                </button>
              ) : (
                <button className="disabled" onClick={changeParticipating}>Participar</button>
              )}
            </div>
          </div>
        </div>
        <div id="description">
          <div>
            <h2>Descrição</h2>
            <p>{state.eventDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
