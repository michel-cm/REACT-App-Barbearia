import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import * as C from "./styles";

export function DefaultLayout() {
  return (
    <C.LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </C.LayoutContainer>
  );
}
