import { FC, useRef } from "react";
import "../sections.style.css";
import "./intruduction.style.css";
import "../../App.style.css";
import dog from "../../assets/border-collie.png";
import { SectionsInterface } from "../sections.interface";
import { useSectionOnScreen } from "../../useSectionOnScreen";
import { useImagesOnScreen } from "../../useImagesOnScreen";

const tableContent = [
  {
    title: "Rejon/kraj pochodzenia:",
    info: "Wielka Brytania",
  },
  {
    title: "Klasyfikacja FCI:",
    info: "Grupa 1, Sekcja 1, Owczarki",
  },
  {
    title: "Temperament:",
    info: "wytrwały, inteligentny, energiczny, grzeczny, posłuszny, uważny",
  },
  {
    title: "Kolory:",
    info: "biały i czarny, biały z czarnym i beżowym, biały i wątrobianym, rudym i beżowym, beżowy i biały",
  },
  {
    title: "Waga:",
    info: "Pies: 14–20 kg, Suka: 12–19 kg",
  },
  {
    title: "Wysokość:",
    info: "Pies: 48–56 cm, Suka: 46–53 cm",
  },
  {
    title: "Długość życia:",
    info: "od 10 do 17 lat",
  },
];

export const Introduction: FC<SectionsInterface> = ({
  sectionRef,
  setActiveTab,
  wrapperRef,
}) => {
  const imagesContainerRef = useRef(null);

  const sectionOnScreenCallback = () => {
    setActiveTab(0);
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
      rootMargin: "0px 0px 0px 400px",
      threshold: 0.2,
    },
    imagesContainerRef
  );

  const renderTableContent = () =>
    tableContent.map((item, index) => (
      <li key={index}>
        <div className={"row"}>
          <span className="table-item-title">{item.title}</span>
          <span className="table-item-info">{item.info}</span>
        </div>
        <div className="divider" />
      </li>
    ));

  return (
    <>
      <header ref={imagesContainerRef}>
        <img
          data-src="grass.jpg"
          src="placeholder.png"
          alt="grass"
          className="background"
        />
        <img data-src={dog} src="placeholder.png" className="foreground" />
        <h1 className="title">Border Collie</h1>
      </header>

      <section className="section introduction-section" ref={sectionRef}>
        <div className="about">
          Border collie to niezwykle popularna rasa ciesząca się
          zainteresowaniem miłośników psów na całym świecie. Sympatyczne,
          aktywne psiaki średniej wielkości stanowią doskonałego towarzysza.
        </div>
        <ul className="table">{renderTableContent()}</ul>
        <h3>Historia rasy</h3>
        Border collie to brytyjskie psy pasterskie, które miały za zadanie
        wykonywać prace związane z wypasem owiec w każdych możliwych warunkach
        atmosferycznych. Z tego też powodu, są to psy bardzo inteligentne oraz
        zdolne do szybkiej nauki. Potrafią doskonale wpływać na zachowanie
        innych zwierząt, zwłaszcza owiec. Wykorzystują do tego szczekanie, a
        także sugestywne spojrzenie. Za ich bezpośrednich przodków uważa się
        krzyżówkę miejscowych psów z rejonów Wielkiej Brytanii z psami, które
        przybyły wraz z wikingami. Były to sporych rozmiarów czworonogi
        wykorzystywane do ochrony bydła. Na pierwsze wzmianki o tych psach,
        które kochają pracę, możemy już natrafić w zapiskach z roku 943.
        Dokładny opis rasy pochodzi z 1573 roku z książki Johannesa Caina. Od
        tego stulecia nieustannie rosła liczba tych psów pojawiających się w
        zagrodach na terenach Wielkiej Brytanii. Na przestrzeni lat rasa
        rozprzestrzeniła się po całej Europie i z czasem zaczęła trafiać także
        do domów, gdzie owce i bydło nie występowały w ogóle. Z tego też powodu
        niektóre psy zatraciły nieco swoje wrodzone instynkty. Co ciekawe, nazwę
        rasy oficjalnie nadano dopiero w 1916 roku. Interesującym może okazać
        się również fakt, iż „collie” odnosi się do owczarków szkockich,
        natomiast „border” świadczy o pograniczu Szkocji i Anglii, czyli
        obszaru, z którego wywodzi się rasa.
      </section>
    </>
  );
};
