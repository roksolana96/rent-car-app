import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Suspense } from 'react';




import { MainPages } from "../../pages/MainPages/MainPages";
import { Catalog } from "../../pages/CatalogPages/Catalog";
import { Favorites } from "../../pages/FavoritesPages/Favorites";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Loader } from "../Loader/Loader";



export const App = () => {
  return (
    <>
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPages />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
  </>
  );
}

