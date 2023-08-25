import { Link } from "react-router-dom";
import "./404.css";

export default function Page404() {
  return (
    <div className="hospital-bg d-flex justify-content-center align-items-center flex-column">
      <h1>404</h1>
      <h4>You're lost.</h4>
      <h4>Have yout taken your meds...?</h4>
      <h4 className="my-4">Lets go back together</h4>
      <Link to="/">
        <button className="go-back">HOME</button>
      </Link>
    </div>
  );
}
