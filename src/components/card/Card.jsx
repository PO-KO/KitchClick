import "./card.css";

const Card = ({ cuisine, name, brief, price, supps }) => {
  return (
    <div className="Card">
      <div className="Head">
        <img src={cuisine} alt="image" />
        <div className="Info">
          <h3>{name}</h3>
          <p>{brief}</p>
          <h3>
            <sup className="Euro">€</sup> {price}
          </h3>
        </div>
      </div>
      <div className="Body">
        <h3>Supléments</h3>
        <ul className="Supps">
          {supps?.map((supp, i) => (
            <li className="Supp" key={i} value={supp}>
              {supp}
            </li>
          ))}
        </ul>
      </div>
      <button className="Button">Ajouter au menu</button>
    </div>
  );
};

export default Card;
