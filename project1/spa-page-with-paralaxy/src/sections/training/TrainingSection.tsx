import "./training.style.css";
import "../sections.style.css";
import { FC, Fragment, useRef } from "react";
import { SectionsInterface } from "../sections.interface";
import { useSectionOnScreen } from "../../useSectionOnScreen";
import { useImagesOnScreen } from "../../useImagesOnScreen";

export const TrainingSection: FC<SectionsInterface> = ({
  sectionRef,
  setActiveTab,
  wrapperRef,
}) => {
  const imagesContainerRef = useRef(null);

  const sectionOnScreenCallback = () => {
    setActiveTab(2);
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
      rootMargin: "200px 0px 0px 1000px",
      threshold: 0,
    },
    imagesContainerRef
  );

  return (
    <>
      <div className="training-images" ref={imagesContainerRef}>
        <img
          data-src="gradient-training.png"
          src="placeholder.png"
          alt="grass"
          className="background"
        />
        <img
          data-src="border-collie-puppy-training.png"
          src="placeholder.png"
          className="foreground-near"
        />
        <img
          data-src="border-collie-training.png"
          src="placeholder.png"
          className="foreground-far"
        />
      </div>

      <section className="section training-section" ref={sectionRef}>
        <h3>Postępowanie z rasą</h3>
        <h4>Wychowanie i tresura</h4>
        <p>
          Jest to rasa pracująca, która wymaga niemal ciągłej stymulacji, a
          także rozmaitych zajęć. Czworonogi te z łatwością ulegają również
          nudzie, przez co szkolenie powinno być możliwie najbardziej
          zróżnicowane, a także zajmujące uwagę zwierzęcia. Polecaną metodą
          okazują się krótsze serie treningowe, odbywające się kilkukrotnie w
          ciągu dnia. Wówczas ich skuteczność może okazać się o wiele bardziej
          zadowalająca.
        </p>
        <p>
          Rasa cechuje się dużą inteligencją, ale również znaczącymi chęciami do
          współpracy z człowiekiem. Niektórzy określają te czworonogi mianem
          „rzepów”, które podążają za opiekunami w praktycznie każde miejsce,
          jednocześnie wymagając stałego kontaktu. Należy jednak zaznaczyć, że{" "}
          <b>nie jest to pies dla początkujących opiekunów.</b> Jego wychowanie
          i tresura wymagają bowiem sporego doświadczenia, a także zaangażowania
          ze strony człowieka. Połączenie, jakim jest inteligencja, upór oraz
          spryt, nieraz stanowi ogromne wyzwanie.
        </p>
        <p>
          W szkoleniu psów tej rasy należy zadbać o prawidłową socjalizację, a
          także konsekwencję w podejmowanych działaniach. Całkowicie niewskazane
          jest natomiast stosowanie metod awersyjnych oraz agresji. Istotnym
          okazuje się również nauczenie czworonoga umiejętności odpoczynku oraz
          wyciszenia się. W przeciwnym razie pupil może doświadczać nadmiernego
          stresu związanego z koniecznością ciągłego bycia w gotowości oraz
          wyczekiwania komend opiekuna, co z kolei może przyczyniać się do
          występowania rozmaitych dolegliwości psychicznych.
        </p>

        <h4>Pielęgnacja</h4>
        <p>
          Border Collie nie wymaga od właściciela ogromnego poświęcenia oraz
          czasochłonnych czynności. Pielęgnacja powinna obejmować przede
          wszystkim regularne wyczesywanie sierści. Czynność tą warto powtarzać
          przynajmniej raz w tygodniu. Oczywiście, należy robić to częściej w
          momencie, gdy występują okresy intensywnego linienia.
        </p>
        <p>
          Od czasu do czasu koniecznym okazuje się również wykąpanie czworonoga,
          a także kontrolowanie stanu jego zębów, uszu oraz pazurów. Niezbędnym
          jest również monitorowanie oczu pupila, gdyż rasa wykazuje skłonności
          do takich chorób, jak anomalia oka collie (tzw CEA) oraz postępujący
          zanik siatkówki (tzw. PRA).
        </p>
      </section>
    </>
  );
};
