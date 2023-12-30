import React from "react";
import styles from "../Styles/Card.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Card = ({ cardDet, deletecard }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.cardCont}>
        <div className={styles.cardImage}>
          <img src={cardDet.photo} alt="wall" />
        </div>
        <div className={styles.cardData}>
          <div className={styles.title}>{cardDet.title}</div>
          <div className={styles.description}>{cardDet.description}</div>
          <div className={styles.CardBtn}>
            <button onClick={() => navigate(`/single-card/${cardDet._id}`)}>
              Know More
            </button>
            <span className={styles.trash}>
              <FaTrashCan onClick={() => deletecard(cardDet._id)} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
