import "./behaviour.style.css";
import "../sections.style.css";
import { FC, useRef } from "react";
import { SectionsInterface } from "../sections.interface";
import { useSectionOnScreen } from "../../useSectionOnScreen";
import { useImagesOnScreen } from "../../useImagesOnScreen";

export const BehaviourSection: FC<SectionsInterface> = ({
  sectionRef,
  setActiveTab,
  wrapperRef,
}) => {
  const imagesContainerRef = useRef(null);
  const sectionOnScreenCallback = () => {
    setActiveTab(1);
  };

  useSectionOnScreen(
    {
      root: sectionRef.current,
      rootMargin: "0px",
      threshold: 0,
    },
    sectionRef,
    sectionOnScreenCallback
  );

  useImagesOnScreen(
    {
      root: wrapperRef?.current,
      rootMargin: "200px 0px 0px 0px",
      threshold: 0.2,
    },
    imagesContainerRef
  );

  return (
    <>
      <div
        className="behaviour-images"
        id={"behaviour-section-images"}
        ref={imagesContainerRef}
      >
        <img
          src="placeholder.png"
          data-src="behaviour-background.jpg"
          alt="grass"
          className="background"
        />
        <img
          data-src="border-collie-behaviour.png"
          src="placeholder.png"
          className="foreground"
        />
      </div>

      <section className="section behaviour-section" ref={sectionRef}>
        <h3>Charakter</h3>
        <p>
          Border collie to pies, który pomimo swych małych rozmiarów posiada
          nieograniczone pokłady energii. Jest zwierzęciem bardzo żywiołowym, a
          także niezwykle inteligentnym. To właśnie inteligencja była niezbędna
          do wykonywania roli, do jakiej został przeznaczony. Te psy bowiem
          początkowo były czworonogami typowo pasterskimi, które poruszały się
          po terenie na ugiętych nogach. Niepozorne rozmiary nie przeszkadzają
          im jednak w wymuszaniu posłuszeństwa na innych zwierzętach,
          szczególnie na owcach. Uderzając w bok ciała lub też szczekając,
          potrafi doskonale zdyscyplinować owcę. Ta niezwykle istotna rola
          oczywiście nie jest już wymagana w domowych warunkach.
        </p>
        <p>
          Właściciele tych psów, dzieląc z nimi przestrzeń własnego mieszkania,
          nie wymagają już od nich wywierania wpływu na inne zwierzęta. Jednak
          nadal są to czworonogi bardzo aktywne, co z kolei może wywoływać
          pewien dyskomfort wśród ich opiekunów. Oczywiście można sobie z tym
          poradzić, zapewniając psu wystarczającą ilość codziennej dawki ruchu.
          Angażując się w wychowanie tego czworonoga, należy więc dostarczać
          mnóstwo bodźców fizycznych oraz psychicznych, które sprawią, że pies
          poczuje się szczęśliwy oraz spełniony. Charakter tego psa oraz idący z
          nim w parze nadmiar energii można oczywiście okiełznać, np. zachęcając
          psa do różnorodnych zabaw.
        </p>
        <p>
          Z pewnością od właścicieli tych psów wymaga się sporo poświęconego
          czasu oraz włożonej energii, aby okiełznać gorący temperament psa tej
          rasy. Nadpobudliwość oraz żywiołowość tego zwierzęcia może bowiem być
          przyczyną niemałych kłopotów. Border collie jest <b>uparty</b>, a przy
          tym niezwykle <b>inteligentny</b> oraz <b>sprytny</b>. Takie
          połączenie może być bardzo kłopotliwe, zwłaszcza dla świeżo
          upieczonych właścicieli. Najważniejsza jednak jest nieustanna
          konsekwencja oraz dokładne zarysowanie wszelkich panujących w domu
          reguł. Pod żadnym pozorem nie można oczywiście stosować wszelkich
          metod awersyjnych, czy też agresji wobec psa. Wpłynie to bowiem bardzo
          negatywnie na jego charakter oraz na dalszy rozwój. Zamiast tego warto
          wykazywać opanowanie oraz <b>cierpliwość</b>, połączone z nieprzerwaną
          konsekwencją w działaniu.
        </p>
      </section>
    </>
  );
};
