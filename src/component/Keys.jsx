import "./Keys.css";

const Keys = ({ onKeyPress }) => {
  const buttons = [
    { label: "7", type: "number" },
    { label: "8", type: "number" },
    { label: "9", type: "number" },
    { label: "C", type: "special" },
    { label: "4", type: "number" },
    { label: "5", type: "number" },
    { label: "6", type: "number" },
    { label: "+", type: "operator" },
    { label: "1", type: "number" },
    { label: "2", type: "number" },
    { label: "3", type: "number" },
    { label: "-", type: "operator" },
    { label: "0", type: "number" },
    { label: ".", type: "number" },
    { label: "=", type: "special" },
    { label: "/", type: "operator" },
  ];

  return (
    <div className="keys">
      {buttons.map((button) => (
        <button
          key={button.label}
          onClick={() => onKeyPress(button.label)}
          className={`key-button ${button.type}`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default Keys;
