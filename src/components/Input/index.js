import "./Input.scss";

const Input = ({
  name,
  placeholder,
  className,
  onChange,
  iconLeft,
  value,
  ...props
}) => {
  return (
    <div className="input-field flex align-center">
      {iconLeft && iconLeft}
      <input
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Input;
