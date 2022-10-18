import "./App.css";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import Business from "./Components/business";
import Platform from "./Components/Platform";
import OverView from "./Components/OverView";
import Era from "./Components/Era";
import Marketresearch from "./Components/Marketresearch";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Business />
      <Platform />
      <OverView />
      <Era />
      <Marketresearch />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
