import { useState } from "react";
import "../App.scss";
import Toggle from "../components/toggle";

const DetailsContainer = () => {
  const [toggleState, setToggleState] = useState(true);
  return (
    <section className="container">
      <div
        className="flex align-center justify-between"
        style={{ marginBottom: "20px" }}
      >
        <div className="section-header">
          <h4>Cargo Details</h4>
        </div>
        <div className="flex align-center dangerous-selector">
          <Toggle
            toggleStatus={toggleState}
            handleToggle={(e) => setToggleState(e)}
          />
          &nbsp;
          <span>Dangerous Cargo (ex. Chemicals, Battery)</span>
        </div>
      </div>
      <div className="flex align-center cargo-detail-selector">
        <div className="active">Total Dimensions</div>
        <div>Total Dimensions</div>
      </div>
      <div className="flex align-center volume-weight-input">
        <div className="flex align-center total-input">
          <label>Total Volume</label>
          <input name="totalVolume" />
          <span>cbm</span>
        </div>
        <div className="flex align-center total-input">
          <label>Total Weight</label>
          <input name="totalVolume" />
          <span>cbm</span>
        </div>
      </div>
    </section>
  );
};

export default DetailsContainer;
