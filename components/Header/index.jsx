import { NavLink } from "react-router-dom";
import * as C from "./styles";

export function Header() {
  return (
    <C.Container>
      <img src="https://github.com/twbs.png?size=30" />
      <div>
        <p>Bom dia</p>
        <span>Michel Corrêa Martins da Silva</span>
      </div>
    </C.Container>
  );
}
