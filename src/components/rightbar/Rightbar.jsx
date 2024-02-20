import "./rightbar.css";
import user from "../../assets/imgs/user.jpg";
import pen from "../../assets/Icons/pen.svg";
import { Link } from "react-router-dom";
import MenuItem from "./menuItem/MenuItem";

const Rightbar = () => {
  return (
    <aside className="Rightbar">
      <div className="Wrapper">
        <Link className="User">
          <img src={user} alt="user" />
          <div className="Info">
            <p>Hugo Food</p>
            <h3>Oussama H.</h3>
          </div>
        </Link>
        <div className="Adress">
          <h3>
            Adresse <img src={pen} alt="pen" />
          </h3>
          <p>
            Saint Laurance Avenue, Paris, France
            <br />
            <br />
            (+33) 655463288
          </p>
        </div>
        <div className="Menu">
          <h3>Menu</h3>
          <MenuItem />
        </div>
      </div>
    </aside>
  );
};

export default Rightbar;
