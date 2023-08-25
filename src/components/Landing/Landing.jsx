import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const [timerDays, setDays] = useState("00");
  const [timerHours, setHours] = useState("00");
  const [timerMinutes, setMinutes] = useState("00");
  const [timerSeconds, setSeconds] = useState("00");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("October 31, 2023 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance <= 0) {
        clearInterval(interval.current);
      } else {
        setDays(days.toString().padStart(2, "0"));
        setHours(hours.toString().padStart(2, "0"));
        setMinutes(minutes.toString().padStart(2, "0"));
        setSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // <div className="noisy-50 mt-5">
      <Container className="pb-5">
        <Row className="g-sm-5">
          <Col lg={7} className="pt-5 alive-img">
            <div className="alive-title">
              <img
                src="https://cdn.discordapp.com/attachments/1135924428300099595/1142417602833039410/image.png"
                alt="alive-title"
                className="alive-title-img"
              />
            </div>
          </Col>
          <Col lg={5} className="pt-5 countdown">
            <div
              className="timer-container d-flex flex-column p-5"
              
            >
              <h3 className="countdown-title">
                HEALTH <br /> CHECK UP BOOTH
              </h3>
              <div className="countdown-text">
                <h3>COUNTDOWN</h3>
              </div>

              <div className="d-flex flex-column">
                <div className="d-flex flex-row timer-row timer-row-1">
                  <p className="timer-number timer-number-1">{timerDays}</p>
                  <p className="timer-info timer-info-1 align-self-end">
                    DAYS LEFT
                  </p>
                </div>

                <div className="d-flex flex-row timer-row timer-row-2">
                  <p className="timer-number timer-number-2">{timerHours}</p>
                  <p className="timer-info timer-info-2 align-self-end">
                    HOURS LEFT
                  </p>
                </div>
                <div className="d-flex flex-row timer-row timer-row-3">
                  <p className="timer-number timer-number-3">{timerMinutes}</p>
                  <p className="timer-info timer-info-3 align-self-end">
                    MINUTES LEFT
                  </p>
                </div>
                <div className="d-flex flex-row timer-row timer-row-4">
                  <p className="timer-number timer-number-4">{timerSeconds}</p>
                  <p className="timer-info timer-info-4 align-self-end">
                    SECONDS LEFT
                  </p>
                </div>
              </div>
            </div>
            {screenWidth <= 600 && (
              <div className="stars">
                <img
                  src="https://cdn.discordapp.com/attachments/1135924428300099595/1137036383257632798/image.png"
                  alt="star-left"
                  className="star-left"
                />
                <img
                  src="https://cdn.discordapp.com/attachments/1135924428300099595/1137036323253919794/image.png"
                  alt="star-right"
                  className="star-right"
                />
              </div>
            )}
          </Col>
        </Row>
        <div className="register-container d-flex justify-content-center align-items-center">
          <Link to="https://forms.gle/jNLuabsAJbwHtYA37" target="_blank">
            <button
              to="https://forms.gle/jNLuabsAJbwHtYA37"
              className="register-btn d-flex justify-content-center align-items-center"
            >
              REGISTER NOW
            </button>
          </Link>
        </div>
      </Container>
    // </div>
  );
}
