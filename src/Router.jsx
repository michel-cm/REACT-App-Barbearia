import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Agendamentos } from "./pages/Agendamentos";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
      </Route>
    </Routes>
  );
}
