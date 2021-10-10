import "./Navbar.scss";
import Input from "../Input";
import AppIcon from "../icons/Icon";

const Navbar = () => {
  const onChange = (e) => {};

  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <span>send</span>
          <span>FREIGHT</span>
        </div>
        <div className="search-field flex align-center">
          <Input name="search" placeholder="Search" onChange={onChange} />
          <AppIcon type="md" name="ic_search" />
        </div>
        <div className="action-buttons">
          <button className="request-quote button">Request Quote</button>
          <button className="book-shipment button">Book Shipment</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
