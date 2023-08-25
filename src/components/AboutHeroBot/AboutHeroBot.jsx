import "./AboutHeroBot.css";
import { Col, Row } from "react-bootstrap";

export default function AboutHeroBot() {
  return (
    <div className="about-alive-bot">
      <Row className="gutter bot-row">
        <Col xxl={6} className="mascot-info">
          <div className="mascot-title">
            <h5>MEET OUR MASCOT!</h5>
            <h1>CHESTER</h1>
          </div>
          <div className="mascot-desc">
            <p>
              Alive 9.0 memiliki maskot yang bernama Chester. Chester adalah
              binatang cheetah yang memakai baju chef. Maskot Alive 9.0
              terinspirasi dari cheetah yang aktif, lincah, dan gesit. Cheetah
              mengonsumsi makanan yang sesuai bagi tubuhnya agar dapat berfungsi
              dengan maksimal. Daripada itu, baju chef yang dipakai oleh Chester
              menandakan bahwa ia dapat diandalkan karena kredibilitasnya akan
              ilmu makanan dan nutrisi yang luas.
            </p>
          </div>
        </Col>
        <Col xxl={6} className="mascot">
          <img
            src="https://cdn.discordapp.com/attachments/1138141319181631518/1138378449791221840/Cats.png"
            alt="Cats"
            className="mascot-img"
          />
        </Col>
      </Row>
    </div>
  );
}
