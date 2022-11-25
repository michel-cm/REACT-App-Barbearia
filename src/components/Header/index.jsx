import { NavLink } from "react-router-dom";
import * as C from "./styles";

export function Header() {
  return (
    <C.Container>
      <img src="https://avatars.githubusercontent.com/u/58608300?s=400&u=bbfa29b3fb28d5d8f3edadab14a34d8f272018c5&v=4" />
      <div>
        <p>Bom dia</p>
        <span>Michel Corrêa Martins</span>
      </div>
    </C.Container>
  );
}
