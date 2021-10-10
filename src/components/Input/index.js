import "./Input.scss";

const Input = ({ name, placeholder, className, onChange, ...props }) => {
  return (
    <div className="input-field">
      <input
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
