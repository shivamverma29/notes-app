import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Display from "./components/Display";
// import NotesDisplay from "./components/NotesDisplay";

export default function App() {
  return (
      <div className="container">
        <Navbar />
        <Home />
        <Display />
      </div>
  );
}

