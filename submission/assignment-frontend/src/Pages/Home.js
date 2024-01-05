import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import EmptyMsg from "../Components/EmptyMsg";

const Home = () => {
  const [cards, setCards] = useState([]);

  const getAllCards = () => {
    fetch("http://localhost:5000/api/get-cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data.data);
      });
  };

  const deleteCard = (cardId) => {
    fetch(`http://localhost:5000/api/delete-card/${cardId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        getAllCards();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <div className="main-cont">
      {cards.length == 0 ? (
        <EmptyMsg />
      ) : (
        cards.map((card) => {
          return <Card key={card._id} cardDet={card} deletecard={deleteCard} />;
        })
      )}
    </div>
  );
};

export default Home;
