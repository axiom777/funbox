import React from "react";
import "./App.scss";
import cardsData from "./cards-data.json";
import Card from "./components/Card/Card.jsx";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="header"></div>
        <div className="cards">
          {cardsData.map((cardData, index) => (
            <Card key={index} data={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
