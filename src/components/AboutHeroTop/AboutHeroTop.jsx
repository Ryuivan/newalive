import "./AboutHeroTop.css";
import { Col, Row } from "react-bootstrap";

export default function AboutHero() {
  return (
    <div className="about-alive-top">
      <Row className="gutter">
        <Col xl={6} className="about-alive-container">
          <img
            src="https://cdn.discordapp.com/attachments/1138141319181631518/1142429823306842132/image.png"
            alt="about-alive-img"
            className="about-alive-top-img"
          />
        </Col>
        <Col xl={6} className="about-text">
          <div className="about-title">
            <h5>WHAT IS IT?</h5>
          </div>
          <div className="about-desc">
            <p>
              Alive merupakan acara tahunan yang diselenggarakan oleh UMN
              Medical Center. Tiap tahunnya, Alive mengangkat tema kesehatan.
              Pada tahun ini, Alive 9.0 mengangkat tema besar Nutrient Food.
              Kalau dirincikan, sub-tema Alive 9.0 adalah Food and Body (FnB).
              Tema ini diangkat guna meningkatkan pengetahuan publik terhadap
              betapa pentingnya peran nutrisi makanan kepada tubuh.
            </p>
          </div>
          <div className="about-title-2">
            <h5>NUTRITION</h5>
          </div>
          <div className="about-desc">
            <p>
              Tema ini diangkat guna meningkatkan pengetahuan publik terhadap
              betapa pentingnya peran nutrisi makanan kepada tubuh.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
