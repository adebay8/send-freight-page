import "../App.scss";
import AppIcon from "../components/icons/Icon";
import Input from "../components/Input";
import Select from "../components/select";

const LocationContainer = () => {
  return (
    <section className="container">
      <div className="section-header" style={{ marginBottom: "5px" }}>
        <AppIcon name="ic_info_outline_twotone" type="md" />
      </div>
      <div className="flex align-center location-details">
        <div className="flex align-center type">
          <div>Import</div>
          <div>Export</div>
        </div>
        <Input
          name="from"
          placeholder="City or port"
          iconLeft={
            <div className="flex align-center">
              <AppIcon type="md" name="ic_location_on" />
              &nbsp;From
            </div>
          }
        />
        <Input
          name="to"
          placeholder="City or port"
          iconLeft={
            <div className="flex align-center">
              <AppIcon type="md" name="ic_location_on" />
              &nbsp;To
            </div>
          }
        />
      </div>
      <div className="flex align-center time-details">
        <Input
          name="date"
          placeholder="Ready Date"
          iconLeft={<AppIcon type="fa" name="calendar" />}
        />
        <Select>
          <option value="">Hello</option>
        </Select>
        <Input name="cargoValue" placeholder="Total Cargo Value" />
      </div>
    </section>
  );
};

export default LocationContainer;
