import React from "react";
import Hero from "./Hero";
import Turn from "./Turn";
import Continue from "./Continue";
import Footer from "./Footer";

const AuthorQuiz = ({ turnData }) => {
  console.log("TurnData: " + JSON.stringify(turnData));
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} />
      <Continue />
      <Footer />
    </div>
  );
};

export default AuthorQuiz;
