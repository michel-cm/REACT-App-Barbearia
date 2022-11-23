import { NavLink } from "react-router-dom";
import * as C from "./styles";

export function Header() {
  return (
    <C.Container>
      <div>Logo</div>
      <nav>
        <NavLink to="/" title="início">
          Home
        </NavLink>
        <NavLink to="agendamentos" title="agendamentos">
          Agendamentos
        </NavLink>
      </nav>
    </C.Container>
  );
}
