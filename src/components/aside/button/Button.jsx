import "./button.css";

const Button = ({ children, text }) => {
  return (
    <div className="Item">
      {children}
      <span>{text}</span>
    </div>
  );
};

export default Button;
