import { NavLink } from "react-router-dom";
import * as C from "./styles";
import { AiOutlineHome } from "react-icons/ai";
import { BsScissors } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { CiShoppingBasket } from "react-icons/ci";

export function Footer() {
  return (
    <C.Container>
      <nav>
        <NavLink to="/" title="início">
          <AiOutlineHome />
        </NavLink>
        <NavLink to="agendamentos" title="agendamentos">
          <BsScissors />
        </NavLink>
        <NavLink to="shop" title="shop">
          <CiShoppingBasket  size={25}/>
        </NavLink>
        <NavLink to="perfil" title="perfil">
          <BsPerson size={25}/>
        </NavLink>
      </nav>
    </C.Container>
  );
}
