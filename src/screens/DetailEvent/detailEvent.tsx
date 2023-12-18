import { Header } from "../../components/Header/header";
import "./detailEvent.css";
import { cards } from "../../../data";
import calendar from "../../assets/img/calendar.png";
import location from "../../assets/img/location.png";
import { useEffect } from "react";
import { api } from "../../utils/api";

export function DetailEvent() {
  const [participating, setParticipating] = useState(false);
  //const context = useAuth();

  async function findParticipating() {
    try {
      api
        .post("/getParticipatingList", { email: context.user?.email })
        .then((res) => {
          const list = res.data.participatingList;
          list.map((participating) => {
            if (participating._id === eventId) {
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
        _id: eventId,
        title: eventTitle,
        picture: eventPicture,
        description: eventDescription,
        date: eventDate,
        location: eventLocation,
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }
  async function deleteParticipating() {
    try {
      api.post("/deleteParticipating", {
        email: context.user?.email,
        _id: eventId,
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

  useEffect(() => {
    setParticipating(false);
    findParticipating();
  }, []);
  return (
    <>
      <Header />
      <div>
        <h1>{cards[0].tittle}</h1>

        <div id="details">
          <img src={cards[0].img2} />

          <div id="info">
            <div>
              <img src={calendar} />
              <p>{cards[0].date}</p>
            </div>

            <div>
              <img src={location} />
              <p>{cards[0].location}</p>
            </div>
          </div>
        </div>
        <div id="description">
          <div>
            <h2>Descrição</h2>
            <p>{cards[0].description2}</p>
          </div>
        </div>
      </div>
    </>
  );
}
