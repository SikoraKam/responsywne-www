import { Menu } from "./components/Menu/Menu";
import { Introduction } from "./sections/introduction/Introduction";
import "./App.style.css";
import { BehaviourSection } from "./sections/behaviour/Behaviour";
import { TrainingSection } from "./sections/training/TrainingSection";
import { PuppiesSection } from "./sections/puppies/PuppiesSection";
import { createRef, useEffect, useRef, useState } from "react";

const sections = ["introduction", "behaviour", "training", "puppies"];

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const sectionsWrapperRef = useRef(null);

  const refs = sections.reduce((refsObj: any, section) => {
    refsObj[section] = createRef();
    return refsObj;
  }, {});

  const handleClickOnMenuItem = (sectionName: string) => {
    refs[sectionName].current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <Menu
        handleClick={handleClickOnMenuItem}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="sections-wrapper" ref={sectionsWrapperRef}>
        <Introduction
          wrapperRef={sectionsWrapperRef}
          sectionRef={refs["introduction"]}
          setActiveTab={setActiveTab}
        />
        <BehaviourSection
          wrapperRef={sectionsWrapperRef}
          sectionRef={refs["behaviour"]}
          setActiveTab={setActiveTab}
        />
        <TrainingSection
          wrapperRef={sectionsWrapperRef}
          sectionRef={refs["training"]}
          setActiveTab={setActiveTab}
        />
        <PuppiesSection
          wrapperRef={sectionsWrapperRef}
          sectionRef={refs["puppies"]}
          setActiveTab={setActiveTab}
        />
      </div>
    </>
  );
}

export default App;
