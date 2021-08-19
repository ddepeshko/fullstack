const errorHandler = require('../utils/errorHandler');
const Order = require('../models/Order');

const getAllOrders = async (req, res) => {
    const query = {
        user: req.user.id
    }
    // Start Date
    if(req.query.start) {
        query.date = {
            $gte: req.query.start
        }
    }

    // End Date
    if(req.query.end) {
        if(!query.date) {
            query.date = {};
        }

        query.date = {
            $lte: req.query.end
        }
    }

    if(req.query.order) {
        query.order = parseInt(req.query.order);
    }

    try {
        const orders = await Order.find(query)
            .sort({date: -1})
            .skip(parseInt(req.query.offset))
            .limit(parseInt(req.query.limit));
        res.status(200).json(orders);

    } catch (e) {
        errorHandler(res, e);
    }
};
const createOrders = async (req, res) => {
    try {
        const lastOrder = await Order
            .findOne({user: req.user.id})
            .sort({date: -1});

        const maxOrder = lastOrder ? lastOrder.order : 0;
        const order = new Order({
            list: req.body.list,
            user: req.user.id,
            order: maxOrder + 1
        });
        await order.save();
        res.status(201).json(order);

    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports = { getAllOrders, createOrders };
