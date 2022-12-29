import { FC } from "react";
import "./intruduction.style.css";
import "../../App.style.css";
import dog from "../../assets/border-collie.png";

export const Intruduction: FC = () => {
  return (
    <>
      <header>
        <img src="background-grass.jpg" alt="grass" className="background" />
        <img src={dog} className="foreground" />
        <h1 className="title">Border Collie</h1>
      </header>

      <section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id
        turpis id turpis semper fermentum quis at ipsum. Vivamus tellus urna,
        vulputate id elementum non, convallis eu purus. Fusce ut pharetra
        sapien, sollicitudin tempor lorem. Nullam ipsum ante, interdum quis ante
        vitae, ultrices finibus turpis. Sed a lorem eleifend erat pharetra
        tincidunt quis sed lectus. Etiam ultricies, dui ac rhoncus efficitur,
        nunc ipsum mattis lorem, vitae maximus nisl arcu et lacus. Cras mollis,
        sapien nec congue efficitur, nisi arcu egestas ex, sed congue felis ex
        vulputate dolor. Proin sed urna et eros placerat sodales. Cras pharetra
        tellus sed posuere sagittis. Nulla viverra dui sed diam eleifend
        scelerisque. Etiam dapibus nec turpis sed luctus. Nam commodo feugiat
        lacus non tristique. Suspendisse in sem a purus efficitur blandit sed
        sed ex. Pellentesque varius molestie mauris. Donec laoreet magna ut
        massa pellentesque, sit amet convallis arcu sollicitudin. Morbi id lorem
        ac lorem consectetur egestas. Ut imperdiet blandit sapien, in venenatis
        orci dapibus eget. Integer elit risus, egestas non quam ac, accumsan
        ornare leo. Ut vitae laoreet ante. Mauris dictum augue lectus, et
        condimentum ante hendrerit non. Praesent massa risus, rhoncus vel erat
        quis, laoreet tincidunt velit. Maecenas enim dui, vulputate nec auctor
        quis, hendrerit sed ipsum. Vivamus porta quam lacus, eget laoreet magna
        mollis sit amet. Phasellus vel nulla felis. Mauris facilisis in tortor
        vitae pharetra. Pellentesque vulputate a augue a gravida. Suspendisse
        sed lacus massa. Proin placerat ante ut blandit laoreet. In consequat
        erat a ipsum finibus consequat. Integer semper nibh ligula, gravida
        pharetra lorem tristique sit amet. Sed a ligula est. Aliquam erat
        volutpat. Sed malesuada, nisl vitae tincidunt feugiat, lorem urna
        ultrices enim, eu convallis enim lorem eget nunc. Maecenas a elementum
        nulla, id consequat lacus. Maecenas tincidunt tincidunt mollis. Maecenas
        libero nisi, iaculis id velit et, varius sodales ante. Curabitur
        dignissim placerat odio a egestas. Fusce a leo ut felis pellentesque
        lacinia. Nullam vel erat a tortor ultricies eleifend. Nunc vitae mattis
        lorem. Suspendisse non condimentum leo. Aliquam metus sem, viverra quis
        sem sit amet, laoreet ullamcorper libero. Mauris molestie sed urna at
        gravida. Cras ut arcu et eros aliquam convallis eget ut purus. Mauris
        sagittis turpis metus, sit amet gravida ipsum placerat ut. Pellentesque
        congue vestibulum elit sed congue. Integer interdum id justo vitae
        vestibulum. Duis laoreet ante vitae tortor tempus mollis. Fusce sit amet
        congue sem. Fusce hendrerit ex id lacus pharetra accumsan. Nullam augue
        mi, semper a interdum eget, mattis sit amet lorem. Morbi lobortis nisl
        non risus pretium, eget elementum turpis tempor.
      </section>
    </>
  );
};
