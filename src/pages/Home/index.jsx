import * as C from "./styles";

import navalhaWhite from "../../assets/navalhaWhite.png";
import completoWhite from "../../assets/completoWhite.png";
import maquinaWhite from "../../assets/maquinaWhite.png";
import barbaWhite from "../../assets/barbaWhite.png";

import { BsChevronRight } from "react-icons/bs";

export function Home() {
  return (
    <C.Container>
      <C.AreaTitleSection>
        <p>
          Qual<span> serviço</span>
        </p>
        <p>você está precisando?</p>
      </C.AreaTitleSection>
      <C.AreaServices>
        <C.CardService>
          <C.ContentCard>
            <img src={maquinaWhite} alt="" />
            <p>Cabelo</p>
            <p>R$ 20,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.CardService>
        <C.CardService>
          <C.ContentCard>
            <img src={barbaWhite} alt="" />
            <p>Barba</p>
            <p>R$ 25,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.CardService>
        <C.CardService>
          <C.ContentCard>
            <img src={navalhaWhite} alt="" />
            <p>Acabamento</p>
            <p>R$ 10,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.CardService>
        <C.CardService>
          <C.ContentCard>
            <img src={completoWhite} alt="" />
            <p>Completo</p>
            <p>R$ 40,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.CardService>
      </C.AreaServices>
    </C.Container>
  );
}
