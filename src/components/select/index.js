import "./Select.scss";

const Select = ({ name, children }) => {
  return (
    <div className="select-field">
      <select name={name}>
        <option value="">Incoterms</option>
        {children}
      </select>
    </div>
  );
};

export default Select;
