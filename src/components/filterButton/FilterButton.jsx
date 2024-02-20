import "./filterButton.css";
import plate from "../../assets/Icons/plate.png";

const FilterButton = ({ type }) => {
  return (
    <div className="Filter">
      <img src={plate} alt="filter" />
      <span>{type}</span>
    </div>
  );
};

export default FilterButton;
