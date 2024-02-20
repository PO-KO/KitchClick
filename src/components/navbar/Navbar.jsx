import "./navbar.css";
import loop from "../../assets/Icons/loop.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="Search">
        <input type="text" placeholder="Recherche..." />
        <Link to={"#"}>
          <img src={loop} alt="loop" />
        </Link>
      </div>
      <div className="Call">
        <Link href="#" className="Phone">
          +33 655463288
        </Link>
        <Link href="#" className="Button">
          Prendre rendez-vous
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
