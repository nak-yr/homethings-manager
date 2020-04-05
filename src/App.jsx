import React from 'react';
import './App.css';
import UserInterface from './components/UserInterface';
import ThingsList from './components/ThingsList';
import ThingState from './components/ThingsStates';

function App() {
  const numbers = ['Hello', 2, 3, 4, 5];
  return (
    <div className="App">
      <UserInterface />
      <ThingsList numbers={numbers} />
      <ThingState />
    </div>
  );
}

export default App;
