import React from "react";
import "../App.css";
import UserInterface from "./UserInterface";
import ThingsList from "./ThingsList";

function App() {
  return (
    <div className="App">
      <UserInterface />
      <ThingsList />
    </div>
  );
}

export default App;
