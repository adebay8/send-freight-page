import "./App.scss";
import Navbar from "./components/Navbar";
import AppIcon from "./components/icons/Icon";

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
          <div className="container">
            <h4 className="section-title">Select a service</h4>
            <div className="services">
              <div className="service">
                <span>Air freight</span>
                <div className="service-icon">
                  <AppIcon type="md" name="ic_search" size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
