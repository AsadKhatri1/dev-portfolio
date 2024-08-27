import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Contact />
      <Footer></Footer>
    </>
  );
}

export default App;
