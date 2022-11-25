import * as C from "./styles";

import navalhaWhite from "../../assets/navalhaWhite.png";

import completoWhite from "../../assets/completoWhite.png";

import maquinaWhite from "../../assets/maquinaWhite.png";

import barbaWhite from "../../assets/barbaWhite.png";

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
        <div>
          <img src={maquinaWhite} alt="" />
        </div>
        <div>
          <img src={barbaWhite} alt="" />
        </div>
        <div>
          <img src={navalhaWhite} alt="" />
        </div>
        <div>
          <img src={completoWhite} alt="" />
        </div>
      </C.AreaServices>
    </C.Container>
  );
}
