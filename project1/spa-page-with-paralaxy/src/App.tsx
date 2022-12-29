import { Menu } from "./components/Menu/Menu";
import { Intruduction } from "./sections/intruduction/Intruduction";
import "./App.style.css";

function App() {
  return (
    <div className="sections-wrapper">
      <div>
        <Menu />
      </div>
      <Intruduction />
    </div>
  );
}

export default App;
