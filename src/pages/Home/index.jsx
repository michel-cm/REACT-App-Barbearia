import * as C from "./styles";

import navalhaWhite from "../../assets/navalhaWhite.png";

import completoWhite from "../../assets/completoWhite.png";

import maquinaWhite from "../../assets/maquinaWhite.png";

import barbaWhite from "../../assets/barbaWhite.png";

export function Home() {
  return (
    <C.Container>
      <div>
        Home
        <img src={maquinaWhite} alt="" />
        <img src={barbaWhite} alt="" />
        <img src={navalhaWhite} alt="" />
        <img src={completoWhite} alt="" />
      </div>
    </C.Container>
  );
}
