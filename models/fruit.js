const mongoose = required("mongoose");

const fruitSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  readyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
