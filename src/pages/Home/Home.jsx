import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import BookList from "../../components/BookList/BookList";

function Home() {
  return (
    <main>
      <Header />
      <Outlet />
      {/* <BookList /> */}
      <Footer />
    </main>
  );
}

export default Home;
