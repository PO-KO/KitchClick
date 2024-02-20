import "./menuItem.css";
import asian from "../../../assets/imgs/asian.jpg";
import penBlack from "../../../assets/Icons/pen-black.svg";
import cross from "../../../assets/Icons/cross.svg";
const MenuItem = () => {
  return (
    <div className="MenuItem">
      <img className="Close" src={cross} alt="x" />
      <img className="ItemImg" src={asian} alt="item" />
      <div className="Inner">
        <h3>Assiette asiatique</h3>
        <div className="Actions">
          <div className="Qte">
            <span>x1</span>
            <span className="Edit">
              Modifier
              <img src={penBlack} alt="pen" />
            </span>
          </div>
          <h3 className="Price">
            <sup className="Euro">€</sup> 8.49
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
