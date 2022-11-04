import "./styles.css";
import Search from "./Search";
import MainVisual from "./MainVisual";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <body>
      <div className="container">
        <div className="App">
          <Search />
          <MainVisual />

          <Forecast />
          <Footer />
        </div>
      </div>
    </body>
  );
}
