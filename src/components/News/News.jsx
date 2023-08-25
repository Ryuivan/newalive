import "./News.css";
import { Row, Col } from "react-bootstrap";

export default function News() {
  return (
    <div className="news-bg">
      <Row className="news-container m-0 gx-5">
        <Col lg={6} className="d-flex align-items-center">
          <img
            src="https://cdn.discordapp.com/attachments/1139426470901600336/1142428638571151360/image.png"
            alt="news-logo"
            className="news-logo"
          />
        </Col>
        <Col lg={6} className="d-flex align-items-center">
          <div className="news-desc">
            <p>
              Discover the latest event updates here! Stay informed about the
              event schedule, featured guests, and special activities. Check
              back regularly for all the exciting news and behind-the-scenes
              insights. Don't miss a thing!
              <img
                src="https://cdn.discordapp.com/attachments/1139426470901600336/1140274227136700466/bungaNews.webp"
                alt="news-star"
                className="news-star"
              />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
