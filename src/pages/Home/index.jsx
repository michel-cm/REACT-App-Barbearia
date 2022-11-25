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
      <C.AreaCards>
        <C.Card>
          <C.ContentCard>
            <img src={maquinaWhite} alt="" />
            <span>Cabelo</span>
            <p>R$ 20,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={barbaWhite} alt="" />
            <span>Barba</span>
            <p>R$ 25,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={navalhaWhite} alt="" />
            <span>Acabamento</span>
            <p>R$ 10,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={completoWhite} alt="" />
            <span>Completo</span>
            <p>R$ 40,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
      </C.AreaCards>

      <C.AreaTitleSection>
        <p>Está precisando</p>
        <p>
          de algum <span>produto?</span>
        </p>
      </C.AreaTitleSection>
      <C.AreaCards>
        <C.Card>
          <C.ContentCard>
            <img src={maquinaWhite} alt="" />
            <span>Cabelo</span>
            <p>R$ 20,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={barbaWhite} alt="" />
            <span>Barba</span>
            <p>R$ 25,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={navalhaWhite} alt="" />
            <span>Acabamento</span>
            <p>R$ 10,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={completoWhite} alt="" />
            <span>Completo</span>
            <p>R$ 40,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
      </C.AreaCards>
      <C.AreaCards>
        <C.Card>
          <C.ContentCard>
            <img src={maquinaWhite} alt="" />
            <span>Cabelo</span>
            <p>R$ 20,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={barbaWhite} alt="" />
            <span>Barba</span>
            <p>R$ 25,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={navalhaWhite} alt="" />
            <span>Acabamento</span>
            <p>R$ 10,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
        <C.Card>
          <C.ContentCard>
            <img src={completoWhite} alt="" />
            <span>Completo</span>
            <p>R$ 40,00</p>
          </C.ContentCard>
          <BsChevronRight />
        </C.Card>
      </C.AreaCards>
    </C.Container>
  );
}
