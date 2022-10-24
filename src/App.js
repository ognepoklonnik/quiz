import './App.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quiz from "./Components/Quiz";

function App() {
  return (
    <>
    {/* <p>hi all</p> */}
      <Header />
      <Quiz />
      <Footer /> 
    </>
  );
}

export default App;