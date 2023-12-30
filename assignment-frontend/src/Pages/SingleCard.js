import React, { useEffect, useState } from "react";
import Styles from "../Styles/SingleCard.module.css";
import { useNavigate, useParams } from "react-router-dom";

const SingleCard = () => {
  const { cardId } = useParams();

  const [cardData, setCardData] = useState({});
  const [cardTitle, setCardTitle] = useState("");
  const [cardDesc, setCardDesc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/api/get-single-card/${cardId}`)
      .then((res) => res.json())
      .then((data) => {
        setCardTitle(data.data.title);
        setCardDesc(data.data.description);
        setCardData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/api/update-card/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: cardTitle,
        description: cardDesc,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={Styles.cont}>
      <div className={Styles.image}>
        <img src={cardData.photo} />
      </div>
      <div className={Styles.details}>
        <input
          type="text"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <textarea
          value={cardDesc}
          onChange={(e) => setCardDesc(e.target.value)}
        />
      </div>
      <div className={Styles.btn}>
        <button onClick={() => handleUpdate(cardData._id)}>Update Card</button>
      </div>
    </div>
  );
};

export default SingleCard;
