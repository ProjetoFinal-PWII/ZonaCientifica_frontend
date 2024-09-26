import { Header } from "../../components/Header/header";
import "./events.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { date } from "yup";

type Events = {
  _id: string;
  title: string;
  picture: string;
  description: string;
  date: string;
  theme: string;
  location: string;
};

export function criarEvents(){
  return (
    <div id="bodyPageCriarEvento">
      <Header />
      <div className="body">
        <div className="boxCriarEvento">
          <div>
            <label for="title">Título do evento <span>(Minimo 8 caracteres)</span></label>
            <input type="text" id="title" required placeholder=""/>
          </div>
          
          <div>
            <img src={description } alt="description" className="description" />
            <button>
              <input type="text" id="description" name="description" />
            </button>
          </div>

          <div>
            <button>
              <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31" />
            </button>
          </div>

        </div>  
      </div>;
    </div>

  )
}

