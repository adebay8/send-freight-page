import { useState } from "react";
import "../App.scss";
import Toggle from "../components/toggle";

const AdditionalServiceContainer = () => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <section className="container">
      <div className="section-header" style={{ marginBottom: "30px" }}>
        <h4>Additional Services</h4>
      </div>
      <div className="additional-services">
        <div className="flex">
          <Toggle
            toggleStatus={toggleState}
            handleToggle={(e) => setToggleState(e)}
          />
          <div className="additional-service">
            <p className="title">Export Forwarding</p>
            <span className="subtitle">
              We handle clearance and documentation
            </span>
          </div>
        </div>
        <div className="flex">
          <Toggle
            toggleStatus={toggleState}
            handleToggle={(e) => setToggleState(e)}
          />
          <div className="additional-service">
            <p className="title">Import Customs Clearance</p>
            <span className="subtitle">
              We handle import customs and regulatory requirements
            </span>
          </div>
        </div>
        <div className="flex">
          <Toggle
            toggleStatus={toggleState}
            handleToggle={(e) => setToggleState(e)}
          />
          <div className="additional-service">
            <p className="title">Cargo Insurance</p>
            <span className="subtitle">
              Protect your cargo from logistics risks up to full value
            </span>
          </div>
        </div>
        <div className="flex">
          <Toggle
            toggleStatus={toggleState}
            handleToggle={(e) => setToggleState(e)}
          />
          <div className="additional-service">
            <p className="title">Transport / Delivery</p>
            <span className="subtitle">
              We deliver the cargo to your door step from the ports
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServiceContainer;
