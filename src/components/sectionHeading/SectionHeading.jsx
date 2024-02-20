import "./sectionHeading.css";

const SectionHeading = ({ title, text }) => {
  return (
    <div className="Head">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SectionHeading;
