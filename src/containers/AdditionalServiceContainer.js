import { useState } from "react";
import "../App.scss";
import Toggle from "../components/toggle";

const AdditionalServiceContainer = () => {
  return (
    <section className="container">
      <div className="section-header" style={{ marginBottom: "30px" }}>
        <h4>Additional Services</h4>
      </div>
      <div className="additional-services">
        <AdditionalServiceContainer.Service
          title="Export Forwarding"
          subtitle="We handle clearance and documentation"
        />
        <AdditionalServiceContainer.Service
          title="Import Customs Clearance"
          subtitle="We handle import customs and regulatory requirements"
        />
        <AdditionalServiceContainer.Service
          title="Cargo Insurance"
          subtitle="Protect your cargo from logistics risks up to full value"
        />
        <AdditionalServiceContainer.Service
          title="Transport / Delivery"
          subtitle="We deliver the cargo to your door step from the ports"
        />
      </div>
    </section>
  );
};

AdditionalServiceContainer.Service = function AdditionalService({
  title,
  subtitle,
}) {
  const [toggleState, setToggleState] = useState(false);
  return (
    <div className="flex">
      <Toggle
        toggleStatus={toggleState}
        handleToggle={(e) => setToggleState(e)}
      />
      <div className="additional-service">
        <p className="title">{title}</p>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default AdditionalServiceContainer;
