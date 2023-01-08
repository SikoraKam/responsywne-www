import { Menu } from "./components/Menu/Menu";
import { Intruduction } from "./sections/intruduction/Intruduction";
import "./App.style.css";
import { BehaviourSection } from "./sections/behaviour/Behaviour";
import { TrainingSection } from "./sections/training/TrainingSection";

function App() {
  return (
    <div className="sections-wrapper">
      <div>
        <Menu />
      </div>
      <Intruduction />
      <BehaviourSection />
      <TrainingSection />
    </div>
  );
}

export default App;
