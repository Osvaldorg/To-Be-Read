import React from "react";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookList/BookList";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <BookList />
    </div>
  );
}

export default Home;

