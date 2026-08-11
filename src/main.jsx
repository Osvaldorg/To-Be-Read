import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import TbrList from "./pages/TbrList/TbrList.jsx";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Home />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="tbr" element={<TbrList />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

