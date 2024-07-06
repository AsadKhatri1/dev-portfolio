import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
    </>
  );
}

export default App;
