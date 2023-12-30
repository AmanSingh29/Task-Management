const express = require("express");
const {
  createCard,
  deleteCard,
  updateCard,
  getAllCards,
  getSingleCard,
} = require("../Controller/cardControllers");
const router = express.Router();

//api to create a card
router.post("/create-card", createCard);

//api to deleten a card
router.delete("/delete-card/:id", deleteCard);

//api to update a card
router.put("/update-card/:id", updateCard);

//api to get all cards
router.get("/get-cards", getAllCards);

//api to get a single card
router.get("/get-single-card/:id", getSingleCard);

module.exports = router;
