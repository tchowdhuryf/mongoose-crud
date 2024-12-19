const express = require("express");
const router = express.Router();
const Fruit = require("../models/fruit");

//get all fruits
router.get("/", async (req, res) => {
  try {
    const allFruit = await Fruit.find({});
    res.json(allFruit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
