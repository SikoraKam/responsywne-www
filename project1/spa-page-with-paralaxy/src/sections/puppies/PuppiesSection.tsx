import "./puppies.style.css";
import "../sections.style.css";
import { FC } from "react";
import { SectionsInterface } from "../sections.interface";
import { useSectionOnScreen } from "../../useSectionOnScreen";

export const PuppiesSection: FC<SectionsInterface> = ({
  sectionRef,
  setActiveTab,
}) => {
  useSectionOnScreen(
    {
      root: sectionRef.current,
      rootMargin: "0px",
      threshold: 0,
    },
    sectionRef,
    () => setActiveTab(3)
  );

  return (
    <>
      <div className="puppies-images">
        <img src="puppies-background.png" alt="grass" className="background" />
        <img src="puppies-foreground.png" className="foreground" />
      </div>

      <section className="section puppies-section" ref={sectionRef}>
        <h3>Szczeniaki</h3>
        <h4>Szczeniaki i hodowla</h4>
        <p>
          Wybór hodowli powinien być możliwie najbardziej skrupulatny. Jest to
          bowiem rasa, która od wielu lat cieszy się znaczącą popularnością,
          przez co istnieje również ogromne ryzyko napotkania pseudohodowców
          kierujących się chęcią łatwego zysku. Warto jednocześnie zaznaczyć, iż
          w tego typu miejscach psy często są traktowane w sposób
          niehumanitarny, a także cechują się większą podatnością na
          poszczególne choroby i dolegliwości.
        </p>

        <h4>Ceny szczeniąt</h4>
        <p>
          Koszty związane z zakupem szczeniaka rasy border collie są uzależnione
          od wielu czynników, przez co wahają się one w granicach od 3 aż do 8
          tysięcy złotych. Przy określaniu ceny zwierzęcia brane są pod uwagę
          między innymi kryteria takie, jak zgodność ze wzorcem rasy,
          osiągnięcia rodziców, czy też renoma hodowli. Z pewnością warto jednak
          zaznaczyć, iż zbyt niskie ceny powinny wzbudzać wątpliwości, gdyż
          nieraz świadczą one o pseudohodowli.
        </p>

        <h4>Opieka nad szczeniakiem</h4>
        <p>
          Jeżeli nadal zastanawiasz się, czy warto posiadać psa tej rasy, to
          pamiętaj, że to nie tylko pies doskonale wykonujący swoją pracę oraz z
          chęcią przyswajający nową wiedzę, ale przede wszystkim wierny
          przyjaciel rodziny. Warto więc zrobić wszystko, aby pupil czuł się
          dobrze w domu już od pierwszych godzin obecności.
        </p>
        <p>
          Szczeniak tej rasy powinien trafić do nowych właścicieli nie
          wcześniej, niż w wieku 7 tygodni. Wówczas będzie to już odchowany
          pies, który zdążył się nauczyć zachowań socjalnych od swojej mamy oraz
          rodzeństwa. Warto jednocześnie zaznaczyć, iż szczenięta będą wymagały
          nie tylko odpowiedniej socjalizacji, ale i tresury. Pomimo swojego
          uroczego wyglądu wciąż są to bowiem czworonogi o silnym charakterze i
          dużej inteligencji. Nieprawidłowo poprowadzony pies może więc
          przynosić opiekunom wiele zmartwień, szczególnie na dalszych etapach
          swojego życia. Z tego względu rozpoczęcie nauki komend, a także
          poprawnych zachowań powinno odbywać się już od pierwszych dni w nowym
          domu.
        </p>
      </section>
    </>
  );
};
