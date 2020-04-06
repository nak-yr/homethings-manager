import React from 'react';
import './App.css';
import UserInterface from './components/UserInterface';
import ThingsList from './components/ThingsList';

function App() {
  return (
    <div className="App">
      <UserInterface />
      <ThingsList />
    </div>
  );
}

export default App;
