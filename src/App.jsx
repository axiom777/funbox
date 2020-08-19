import React from "react";
import "./App.scss";
import cardsData from './config.json'
import Card from "./components/Card/Card.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header"></div>
        <div className="cards">
          {cardsData.map(cardData => <Card data={cardData}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
