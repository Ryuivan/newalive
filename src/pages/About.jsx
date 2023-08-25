import AboutHeroTop from "../components/AboutHeroTop/AboutHeroTop";
import AboutHeroBot from "../components/AboutHeroBot/AboutHeroBot";
import Tagline from "../components/AboutTagline/Tagline";
// import "../components/AboutHeroTop/AboutHero.css";

export default function About() {
  return (
    <div id="about-background">
      <AboutHeroTop />
      <Tagline />
      <AboutHeroBot />
    </div>
  );
}
