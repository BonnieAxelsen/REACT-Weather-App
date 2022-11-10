import "./css/styles.css";
import Weather from "./Weather";
import MainVisual from "./MainVisual";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather />
        <MainVisual />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}
