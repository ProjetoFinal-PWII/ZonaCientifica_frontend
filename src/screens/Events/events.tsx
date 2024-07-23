import { Header } from "../../components/Header/header";
import "./events.css";
import { Card } from "../../components/Card/card";
import { categories, cards } from "../../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { api } from "../../utils/api";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
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
  const [events, setEvents] = useState<Events[]>([]);

  async function findEvents() {
    try {
      api.get("/events").then((res) => {
        setEvents(res.data);
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  async function findTheme(theme: string){
    const array = []
    events.forEach((event) => {
      if(event.theme == theme){
        array.push(event)
      }
    })
    if(array.length > 0){
      setEvents(array)
    }
  }

  useEffect(() => {
    findEvents();
  }, []);

  return (
    <div id="bodyPageEvents">
      <Header />
      <div id="category">
        <h1>Categorias</h1>
        <div id="categories">
          <Swiper slidesPerView={4} spaceBetween={5} navigation>
            {categories.map((category) => (
              <SwiperSlide>
                <button onClick={() => {findTheme(category.type)}}>
                  <div>
                    <img src={category.img} />
                    <figcaption>{category.type}</figcaption>
                  </div>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div id="event">
        <h1>Eventos</h1>
        <div id="events">
          {events.map((event) => {
            return <Card key={event._id} event={event} />;
          })}
          {cards.length === 0 && (
            <>
              <h3>Sem eventos.</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
