import "./Menu.style.css";
import { MenuItem } from "./MenuItem";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, RefObject, useRef, useState } from "react";

const menuConfig = [
  { text: "Opis rasy", section: "introduction" },
  { text: "Charakter", section: "behaviour" },
  { text: "Postępowanie z rasą", section: "training" },
  { text: "Szczeniaki", section: "puppies" },
];

export interface MenuProps {
  handleClick(sectionName: string): void;
  activeTab: number;
  setActiveTab(tab: number): void;
}

export const Menu: FC<MenuProps> = ({
  handleClick,
  setActiveTab,
  activeTab,
}) => {
  const [isDropdownMenuShown, setIsDropdownMenuShown] = useState(false);

  const onItemClick = (index: number, sectionName: string) => {
    setActiveTab(index);
    handleClick(sectionName);
  };

  const DropdownMenu = () => {
    if (!isDropdownMenuShown) return null;

    return (
      <div className="dropdown-menu">
        {menuConfig.map((elem, index) => (
          <MenuItem
            className="dropdown"
            key={index}
            id={index}
            onClick={() => onItemClick(index, elem.section)}
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
              onClick={() => onItemClick(index, elem.section)}
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
