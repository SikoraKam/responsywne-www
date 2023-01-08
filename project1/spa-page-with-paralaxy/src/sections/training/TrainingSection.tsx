import "./training.style.css";
import "../sections.style.css";

export const TrainingSection = () => {
  return (
    <>
      <div className="training-images">
        <img src="gradient-training.png" alt="grass" className="background" />
        <img
          src="border-collie-puppy-training.png"
          className="foreground-near"
        />
        <img src="border-collie-training.png" className="foreground-far" />
      </div>

      <section className="section training-section">
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
      </section>
    </>
  );
};
