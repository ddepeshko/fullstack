const Category = require('../models/Category');
const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler');

const getAllCategory = async (req, res) => {
  try {
      const categories = await new Category.find({
          user: req.user.id
      });
      res.status(200).json(categories);
  } catch (e) {
    errorHandler(res, e);
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
const createCategory = async (req, res) => {
    const category = new Category({
        name: req.body.name,
        user: req.user.id,
        imageSrc: req.file ? req.file.path : ''
    })
    try {
       await category.save();
       res.status(201).json(category)
    } catch (e) {
        errorHandler(req, e);
    }
};
const updateCategory = async (req, res) => {
    try {
        const updated = {
            name: req.body.name,
        };

        if(req.file) {
            updated.imageSrc = req.file.path
        }

        const category = await new Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        );
        res.status(200).json(category);
    } catch (e) {
        errorHandler(req, e);
    }
};


module.exports = { getAllCategory, getById, removeCategory, createCategory, updateCategory };
