const Position = require("../models/Position");
const errorHandler = require("../utils/errorHandler");

const getByCategoryId = async (req, res) => {
  try {
    const positions = await Position.find({
      category: req.params.id,
      user: req.user.id,
    });
    res.status(200).json(positions);
  } catch (e) {
    errorHandler(res, e);
  }
};

const createPosition = async (req, res) => {
  try {
    const position = new Position({
      name: req.body.name,
      cost: req.body.cost,
      category: req.body.category,
      user: req.user.id,
    });
    await position.save();
    const positions = await Position.find({
      category: req.body.category,
      user: req.user.id,
    });

    res.status(201).json(positions);
  } catch (e) {
    errorHandler(res, e);
  }
};
const updatePosition = async (req, res) => {
  try {
    await Position.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );

    const positions = await Position.find({
      category: req.body.category,
      user: req.user.id,
    });
    res.status(200).json(positions);
  } catch (e) {
    errorHandler(res, e);
  }
};
const removePosition = async (req, res) => {
  try {
    await Position.remove({ _id: req.params.id });
    res.status(200).json({
      message: "Position was removed",
    });
  } catch (e) {
    errorHandler(res, e);
  }
};

module.exports = {
  getByCategoryId,
  updatePosition,
  createPosition,
  removePosition,
};
