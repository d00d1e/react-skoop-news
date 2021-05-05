import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

import "./styles/app.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}
