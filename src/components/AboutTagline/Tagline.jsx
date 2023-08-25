import "./Tagline.css";

export default function Tagline() {
  return (
    <div className="tagline d-flex justify-content-center align-items-center flex-column my-5">
      <div className="tagline-title d-flex align-items-center text-center">
        <p>OUR TAGLINE</p>
      </div>
      <div className="tagline-text text-center">
        <h4>NOURISH YOUR BODY</h4>
        <h4>FUEL YOUR PERFORMANCE</h4>
      </div>
      <div className="tagline-desc d-flex justify-content-center">
        <h5>
          Tagline ini menggambarkan kalau makanan yang kita konsumsi itu harus
          sehat agar performa atau kinerja kita lebih produktif!
        </h5>
      </div>
    </div>
  );
}
