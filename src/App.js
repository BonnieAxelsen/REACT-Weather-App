import "./css/styles.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="Aarhus" />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
