import React from "react";
import Card from "../Card/Card";

const Cards = ({ news }) => {
  if (!Array.isArray(news)) {
    return (
      <div style={{ color: "#e8e8e8", fontSize: "30px" }}>
        No news available
      </div>
    );
  }

  return (
    <div className="row">
      {news.map((newsCard, index) => {
        return <Card key={index} newsCard={newsCard} />;
      })}
    </div>
  );
};

export default Cards;
