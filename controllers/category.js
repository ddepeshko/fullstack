const getAllCategory = (req, res) => {
    res.status(200).json({
        message: 'Get all categories'
    })
};
const getById = (req, res) => {};
const removeCategory = (req, res) => {};
const createCategory = (req, res) => {};
const updateCategory = (req, res) => {};


module.exports = { getAllCategory, getById, removeCategory, createCategory, updateCategory };
