const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

const getAllCategory = async (req, res) => {
  try {
      const categories = await new Category.find({
          user: req.user.id
      });
      req.status(200).json(categories);
  } catch (e) {
    errorHandler(req, e);
  }
};
const getById = async (req, res) => {
    try {
        const category = await new Category.findById({_id: req.params.id});
        res.status(200).json(category);

    } catch (e) {
        errorHandler(req, e);
    }
};
const removeCategory = async (req, res) => {
    try {
        await new Category.remove({_id: req.params.id});
        await new Position.remove({category: req.params.id})
        res.status(200).json({
            message: 'Category was deleted'
        });

    } catch (e) {
        errorHandler(req, e);
    }
};
const createCategory = (req, res) => {
    try {

    } catch (e) {
        errorHandler(req, e);
    }
};
const updateCategory = (req, res) => {
    try {

    } catch (e) {
        errorHandler(req, e);
    }
};


module.exports = { getAllCategory, getById, removeCategory, createCategory, updateCategory };
