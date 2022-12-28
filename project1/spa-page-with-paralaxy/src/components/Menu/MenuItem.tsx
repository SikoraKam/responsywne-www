import { FC, ReactNode } from "react";
import "./MenuItem.style.css";

interface MenuItemProps {
  children: ReactNode;
  href?: string;
  className?: string;
  id?: number;
  onClick(): void;
  isActive?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
  href,
  isActive,
  className,
  children,
  onClick,
}) => {
  const combinedClassName = `${className} ${isActive ? "active" : ""}`;

  return (
    <li className={combinedClassName} onClick={onClick}>
      <a href={href}>{children}</a>
    </li>
  );
};
