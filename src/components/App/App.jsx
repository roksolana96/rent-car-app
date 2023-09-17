import { Routes, Route } from "react-router-dom";

import { Layout } from "../Layout/Layout";

import { MainPages } from "../../pages/MainPages/MainPages";
import { Catalog } from "../../pages/CatalogPages/Catalog";
import { Favorites } from "../../pages/FavoritesPages/Favorites";
import { NotFound } from "../../pages/NotFound/NotFound";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPages />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

