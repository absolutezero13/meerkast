import React from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import "./firebase/firebase";

const App: React.FC = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
