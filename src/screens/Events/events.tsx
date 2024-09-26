import { Header } from "../../components/Header/header";
import "./events.css";
import { Card } from "../../components/Card/card";
import { categories } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../utils/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { Categorie } from "../../components/Categorie/categorie";

type Events = {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string;
  location: string;
};

export function Events() {
  const [events, setEvents] = useState<Events[] | null>(null);
  //const [eventsCategorie, setEventsCategorie] = useState<Events[]>([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("");

  async function findEvents() {
    try {
      const response = await api.get("/events");
      setEvents(response.data);
      //setEventsCategorie(response.data);
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  const eventsCategorie =
    events?.length > 0 ? events?.filter((event) => event.theme == theme) : [];

  async function findTheme(theme: string) {
    setTheme(theme);
    console.log(eventsCategorie);
  }

  useEffect(() => {
    findEvents();
    if (events) {
      setLoading(false);
    }
  }, [events]);

  return (
    <>
      <Header />
      <div id="bodyPageEvents">
        <div id="category">
          <h1>Categorias</h1>
          <div id="categories">
            <Swiper
              slidesPerView={4}
              spaceBetween={50}
              breakpoints={{
                // when window width is >= 320px
                360: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                601: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 100,
                },  
              }}
              navigation
            >
              {categories.map((category) => (
                <SwiperSlide>
                  <Categorie category={category} findTheme={findTheme} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div id="event">
          <h1>Eventos</h1>
          {loading ? (
            <div id="loadingPageEvents"></div>
          ) : theme != "" ? (
            <div id="events">
              {eventsCategorie!.length > 0 ? (
                eventsCategorie!.map((event) => {
                  return <Card key={event._id} event={event} />;
                })
              ) : (
                <h3>Sem eventos nesta categoria.</h3>
              )}
            </div>
          ) : (
            <div id="events">
              {events!.length > 0 ? (
                events!.map((event) => {
                  return <Card key={event._id} event={event} />;
                })
              ) : (
                <h3>Sem eventos.</h3>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
