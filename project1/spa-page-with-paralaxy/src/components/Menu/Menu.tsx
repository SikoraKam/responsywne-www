import "./Menu.style.css";
import { MenuItem } from "./MenuItem";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

const menuConfig = [
  { text: "sekcja1" },
  { text: "sekcja2" },
  { text: "sekcja3" },
  { text: "sekcja4" },
];

export const Menu = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownMenuShown, setIsDropdownMenuShown] = useState(false);

  const DropdownMenu = () => {
    if (!isDropdownMenuShown) return null;

    return (
      <div className="dropdown-menu">
        {menuConfig.map((elem, index) => (
          <MenuItem
            className="dropdown"
            key={index}
            id={index}
            onClick={() => setActiveTab(index)}
            isActive={activeTab === index}
          >
            {elem.text}
          </MenuItem>
        ))}
      </div>
    );
  };

  return (
    <>
      <ul>
        <>
          {menuConfig.map((elem, index) => (
            <MenuItem
              key={index}
              id={index}
              onClick={() => setActiveTab(index)}
              isActive={activeTab === index}
            >
              {elem.text}
            </MenuItem>
          ))}
          <MenuItem
            onClick={() => setIsDropdownMenuShown(!isDropdownMenuShown)}
            className="icon"
          >
            <FontAwesomeIcon icon={faBars} />
          </MenuItem>
        </>
      </ul>
      <DropdownMenu />
    </>
  );
};
