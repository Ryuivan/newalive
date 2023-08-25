import "./AboutHome.css";
import { Link } from "react-router-dom";

export default function AboutHome() {
  return (
    <div className="about-home d-flex justify-content-center align-items-center">
      <div className="green-bg d-flex justify-content-center">
        <div className="about-text-container d-flex justify-content-center flex-column text-center">
          <h3>
            <span>ABOUT ALIVE 9.0</span>
          </h3>
          <h6>
            Alive merupakan acara tahunan yang diselenggarakan oleh UMN Medical
            Center. Tiap tahunnya, Alive mengangkat tema kesehatan. Pada tahun
            ini, Alive 9.0 mengangkat tema besar Nutrient Food. Kalau
            dirincikan, sub-tema Alive 9.0 adalah Food and Body (FnB). Tema ini
            diangkat guna meningkatkan pengetahuan publik terhadap betapa
            pentingnya peran nutrisi makanan kepada tubuh.
          </h6>
          <div className="about-ornament">
            <img src="https://cdn.discordapp.com/attachments/1139426470901600336/1142828097071231047/image.png" alt="ornament-left" className="ornament-left" />
            <img src="https://cdn.discordapp.com/attachments/1139426470901600336/1142828138640973934/image.png" alt="ornament-right" className="ornament-right" />
          </div>
          <Link to="/about">
            <button className="mascot-btn mx-auto">MEET OUR MASCOT!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
