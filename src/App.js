import React from "react";
import './App.css';
import Visualizer from "./Visualizer/Visualizer";
import Navbar from "./components/Navbar";
import Info from "./components/Info";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Visualizer />
      <Info />
    </div>
  );
}

export default App;
