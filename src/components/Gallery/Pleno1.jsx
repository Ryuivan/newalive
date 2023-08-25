import React, {useState} from "react";
import GalleryWave from './GalleryWave';
import Modal from "./Modal";

const gallery =[
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828138453929985/PLENO_1_FINAL-1.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138869303815454730/PLENO_1_FINAL-6.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138869306571112559/PLENO_1_FINAL-7.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828144502124646/PLENO_1_FINAL-2.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138869307732918362/PLENO_1_FINAL-11.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828141075370064/PLENO_1_FINAL-3.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828139313766430/PLENO_1_FINAL-8.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828142061039676/PLENO_1_FINAL-12.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828143386431669/PLENO_1_FINAL-4.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138869300116074626/PLENO_1_FINAL-16.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828134314156042/PLENO_1_FINAL-9.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138869310048190464/PLENO_1_FINAL-5.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138869308877975642/PLENO_1_FINAL-13.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828132758065292/PLENO_1_FINAL-10.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828137388580864/PLENO_1_FINAL-14.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138869305325400146/PLENO_1_FINAL-17.webp"
    },
    {
        "link":"https://cdn.discordapp.com/attachments/1138154440512241845/1138828135568248863/PLENO_1_FINAL-15.webp"
    },
]

const Pleno1 = () =>{
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handelRotationRight = () => {
        const totalLength = gallery.length;
        if (currentIndex + 1 >= totalLength) {
        setCurrentIndex(0);
        const newUrl = gallery[0].link;
        setClickedImg(newUrl);
        return;
        }
        const newIndex = currentIndex + 1;
        const newUrl = gallery.filter((item) => {
        return gallery.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };

    const handelRotationLeft = () => {
        const totalLength = gallery.length;
        if (currentIndex === 0) {
        setCurrentIndex(totalLength - 1);
        const newUrl = gallery[totalLength - 1].link;
        setClickedImg(newUrl);
        return;
        }
        const newIndex = currentIndex - 1;
        const newUrl = gallery.filter((item) => {
        return gallery.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].link;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
    };
    return(
        <section>
            <div className="gallery-image-pleno1">
                <div className="gallery-title-pleno1">
                    <h1>Pleno 1</h1>
                    <h2>27 Juli 2023</h2>
                </div>
                <div className="gallery-image-container-pleno1">
                    <div className="image-container-pleno">
                        {gallery.map
                        ((item, index) =>(
                                <img src={item.link} key={index} onClick={() => handleClick(item, index)} />
                            )
                        )}
                    </div>
                </div> 
            </div>
            <GalleryWave />
            {clickedImg && <Modal
             clickedImg={clickedImg}
             handelRotationRight={handelRotationRight}
             setClickedImg={setClickedImg}
             handelRotationLeft={handelRotationLeft}
             />}
        </section>
    )
}

export default Pleno1 