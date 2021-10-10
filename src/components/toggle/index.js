import "./Toggle.scss";

const Toggle = ({ toggleStatus, handleToggle, className }) => {
  return (
    <div className={`Toggle ${className}`}>
      <div
        onClick={() => handleToggle(!toggleStatus)}
        className={"toggle-wrapper " + (toggleStatus ? "active" : "")}
      >
        <div className={"toggle-switch " + (toggleStatus ? "active" : "")} />
      </div>
    </div>
  );
};

export default Toggle;
