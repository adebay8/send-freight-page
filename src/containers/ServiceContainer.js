import "../App.scss";
import AppIcon from "../components/icons/Icon";

const ServiceContainer = () => {
  return (
    <section className="container" style={{ marginTop: "30px" }}>
      <div className="section-header">
        <h4>Select a service</h4>
      </div>
      <div className="services">
        <div className="service active">
          <span className="service-title">Air freight</span>
          <div className="service-icon airplane">
            <AppIcon type="md" name="ic_airplanemode_active" size={100} />
          </div>
        </div>
        <div className="service">
          <span className="service-title">Sea freight</span>
          <div className="service-icon truck">
            <AppIcon type="fa" name="truck" size={90} />
          </div>
        </div>
        <div className="service">
          <span className="service-title">
            Inland
            <br />
            (Truck & Barge)
          </span>
          <div className="service-icon truck">
            <AppIcon type="fa" name="truck" size={90} />
          </div>
        </div>
        <div className="service">
          <span className="service-title">
            Customs
            <br />
            Clearance
          </span>
          <div className="service-icon airplane">
            <AppIcon type="md" name="ic_airplanemode_active" size={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceContainer;
