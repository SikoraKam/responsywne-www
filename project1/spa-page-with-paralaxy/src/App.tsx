import { Menu } from "./components/Menu/Menu";
import { Intruduction } from "./sections/intruduction/Intruduction";
import "./App.style.css";
import { BehaviourSection } from "./sections/behaviour/Behaviour";
import { TrainingSection } from "./sections/training/TrainingSection";
import { PuppiesSection } from "./sections/puppies/PuppiesSection";

function App() {
  return (
    <>
      <Menu />

      <div className="sections-wrapper">
        <Intruduction />
        <BehaviourSection />
        <TrainingSection />
        <PuppiesSection />
      </div>
    </>
  );
}

export default App;
