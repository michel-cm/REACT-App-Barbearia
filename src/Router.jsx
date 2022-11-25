import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Agendamentos } from "./pages/Agendamentos";
import { Shop } from "./pages/Shop";
import { PerfilSettings } from "./pages/PerfilSettings";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/perfil" element={<PerfilSettings />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
      </Route>
    </Routes>
  );
}
