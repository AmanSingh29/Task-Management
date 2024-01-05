import React, { useRef } from "react";
import styles from "../Styles/Form.module.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();

  const titleRef = useRef();
  const desRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let test = await fetch(
      `https://picsum.photos/v2/list?page=${Math.ceil(
        Math.random() * 100
      )}&limit=1`
    );
    test = await test.json();

    const title = titleRef.current.value;
    const description = desRef.current.value;

    let createPost = await fetch("http://localhost:5000/api/create-card", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        photo: test[0].download_url,
      }),
    });
    createPost = await createPost.json();
    navigate("/");
  };

  return (
    <div className={styles.formCont}>
      <h2>Create A Card</h2>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <p>Enter Card Title</p>
          <input ref={titleRef} required />
          <p>Enter Card Description</p>
          <textarea ref={desRef} rows={2} required />
          <div className={styles.btn}>
            <button type="submit">Create Card</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
