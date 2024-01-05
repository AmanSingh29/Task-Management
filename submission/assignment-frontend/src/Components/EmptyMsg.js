import React from "react";
import styles from "../Styles/EmptyMsg.module.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const EmptyMsg = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.emptyCont}>
        <h1>You have no cards</h1>
        <p>Please Create One</p>
        <div className={styles.btn}>
          <div onClick={() => navigate("/add")}>
            Create Here &nbsp;
            <MdOutlineCreateNewFolder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyMsg;
