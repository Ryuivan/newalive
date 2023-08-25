import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const gallery1 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140677683508953148/PLENO_1_FINAL-1.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140677683945148416/PLENO_1_FINAL-2.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140677684582694932/PLENO_1_FINAL-3.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676474618261564/PLENO_1_FINAL-4.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676476501504000/PLENO_1_FINAL-9.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140677686126198824/PLENO_1_FINAL-10.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676473670353057/PLENO_1_FINAL-17.webp",
  },
];

const gallery2 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140677685450903623/PLENO_1_FINAL-6.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676472248467506/PLENO_1_FINAL-8.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676475134148680/PLENO_1_FINAL-5.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140677686738555041/PLENO_1_FINAL-15.webp",
  },
];

const gallery3 = [
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676475947859988/PLENO_1_FINAL-7.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676477084500059/PLENO_1_FINAL-11.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676472944734248/PLENO_1_FINAL-12.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140677687812292799/PLENO_1_FINAL-16.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676478271504506/PLENO_1_FINAL-13.webp",
  },
  {
    link: "https://cdn.discordapp.com/attachments/1138154440512241845/1140676478825148486/PLENO_1_FINAL-14.webp",
  },
];

const Gallery = () => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  
  return (
    <div className="gallery-bg-image">
      <div className="gallery-bg-wave-top">
        <div className="gallery-bg-wave2"></div>
      </div>
      <section className="gallery-pleno1-container">
        <div className="gallery-pleno1-heading">
          <h1>Pleno 1</h1>
          <h3>27 JULI 2023</h3>
        </div>
        <div className="gallery-pleno1-row">
          <div className="gallery-pleno1-column">
            {gallery1.map((item, index) => (
              <img
                src={item.link}
                key={index}
                onClick={() => handleClick(item, index)}
              />
            ))}
          </div>
          <div className="gallery-pleno1-column">
            {gallery2.map((item, index) => (
              <img
                src={item.link}
                key={index}
                onClick={() => handleClick(item, index)}
              />
            ))}
          </div>
          <div className="gallery-pleno1-column">
            {gallery3.map((item, index) => (
              <img
                src={item.link}
                key={index}
                onClick={() => handleClick(item, index)}
              />
            ))}
          </div>
        </div>
        {clickedImg && (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        )}
      </section>
      <div className="gallery-bg-wave-bottom">
        <div className="gallery-bg-wave1"></div>
      </div>
    </div>
  );
};

export default Gallery;
