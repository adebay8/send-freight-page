import "./App.scss";
import Navbar from "./components/Navbar";
import AppIcon from "./components/icons/Icon";
import ServiceContainer from "./containers/ServiceContainer";
import LocationContainer from "./containers/LocationContainer";
import DetailsContainer from "./containers/DetailsContainer";
import AdditionalServiceContainer from "./containers/AdditionalServiceContainer";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main">
        <div className="side-content">
          <AppIcon type="md" name="ic_keyboard_backspace" size={25} />
        </div>
        <div className="content">
          <h2 className="title">New Booking</h2>
          <p className="subtitle">
            Fill in the information below toget a quote or create a new booking
          </p>
          <ServiceContainer />
          <LocationContainer />
          <DetailsContainer />
          <AdditionalServiceContainer />
        </div>
      </main>
    </div>
  );
}

export default App;
