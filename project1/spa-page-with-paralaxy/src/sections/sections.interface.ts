import React, { Ref } from "react";

export interface SectionsInterface {
  sectionRef: React.RefObject<HTMLElement & HTMLDivElement>;
  setActiveTab(tab: number): void;
  wrapperRef?: React.RefObject<HTMLDivElement>;
}
