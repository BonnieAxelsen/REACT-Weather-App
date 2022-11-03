import "./styles.css";
import Search from "./Search";
import MainVisual from "./MainVisual";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="container-fluid">
          <Search />
          <MainVisual />
          <Forecast />
          <Footer />
        </div>
      </div>
    </div>
  );
}
