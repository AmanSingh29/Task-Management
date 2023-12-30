const Card = require("../Models/cardSchema");

const createCard = async (req, res) => {
  const { title, description, photo } = req.body;
  try {
    if (!title || !description || !photo) {
      return res
        .status(400)
        .json({ error: "One or more feilds are mandatory!" });
    }
    const newCard = new Card({ title, description, photo });
    await newCard.save();
    return res
      .status(202)
      .json({ success: "Card Created Successfully", cardData: newCard });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

const deleteCard = async (req, res) => {
  try {
    const cardInDb = await Card.findById(req.params.id);
    if (!cardInDb) {
      return res.status(400).json({ error: "Card not awailable!" });
    }
    await Card.findByIdAndDelete(req.params.id);
    return res.status(202).json({ success: "Card Deleted Successfully!" });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

const updateCard = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "One or more feilds are mandatory!" });
    }
    const cardInDb = await Card.findByIdAndUpdate(
      req.params.id,
      { title: title, description: description },
      { new: true }
    );
    return res
      .status(202)
      .json({ result: "Card Updated Successfully!", data: cardInDb });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

const getAllCards = async (req, res) => {
  try {
    const allCards = await Card.find();
    return res.status(202).json({ data: allCards });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

const getSingleCard = async (req, res) => {
  try {
    const singleCard = await Card.findById(req.params.id);
    if (!singleCard) return res.status(400).json({ error: "Card Not Found!" });
    return res.status(200).json({ data: singleCard });
  } catch (error) {
    return res.status(501).json({ error: "Internal Server Error!" });
  }
};

module.exports = {
  createCard,
  deleteCard,
  updateCard,
  getAllCards,
  getSingleCard,
};
