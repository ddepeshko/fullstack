const express = require('express');
const controller = require('../controllers/category');
const router = express.Router();

router.get('/', controller.getAllCategory);
router.get('/:id', controller.getById);
router.delete('/:id', controller.removeCategory);
router.post('/', controller.createCategory);
router.patch('/:id', controller.updateCategory);

module.exports = router;
