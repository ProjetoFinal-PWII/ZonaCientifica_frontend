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
  const [events, setEvents] = useState<Events[]>([] as Events[]);
  const [eventsCategorie, setEventsCategorie] = useState<Events[]>([]);
  const [loading, setLoading] = useState(true);

  async function findEvents() {
    try {
       const response = await api.get("/events");
       setEvents(response.data);
       setEventsCategorie(response.data);
       setLoading(false);
    } catch (error) {
      console.log("ERRO: " + error);
      setLoading(false);
    }
  }

  async function findTheme(theme: string) {
    const array : Events[] = [];
    eventsCategorie.forEach((event) => {
      if (event.theme == theme) {
        array.push(event);
      }
    });
    if (array.length > 0) {
      setEvents(array);
    }
    if(array.length === 0){
      setEvents([])
    }
  }

  useEffect(() => {
    findEvents();
  }, []);

  if(loading) {
    return
  }
  
  return (
    <>
      <Header />
      <div id="bodyPageEvents">
        <div id="category">
          <h1>Categorias</h1>
          <div id="categories">
            <Swiper slidesPerView={4} spaceBetween={5} navigation>
              {categories.map((category) => (
                <SwiperSlide>
                  <Categorie category={category} findTheme={findTheme}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div id="event">
          <h1>Eventos</h1>
          <div id="events">
            {
              events.length > 0 ? (
                events.map((event) => {
                  return <Card key={event._id} event={event}/>
                })
              ) : (
                  <h3>Sem eventos.</h3>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
}
