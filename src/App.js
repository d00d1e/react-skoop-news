import React from "react";
import { useSelector } from "react-redux";
import Blogs from "./components/Blogs";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { selectSignedIn } from "./features/userSlice";

import "./styles/app.css";

export default function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
}
