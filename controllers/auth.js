const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { jwtToken } = require('../config/keys');

const login = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email});
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password);
        if (passwordResult) {
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
            }, jwtToken, {
                expiresIn: 3600
            });

            res.status(200).json({
                token: `Bearer ${token}`
            })

        } else {
            res.status(401).json({
                message: 'Wrong password'
            });
        }

    } else {
        res.status(404).json({
            message: 'User do not exist'
        });
    }
};

const register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email});

    if(candidate) {
        res.status(409).json({
            message: 'Email is already exists'
        });
        throw new Error('user exist');
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        });
        try {
            await user.save();
            res.status(201).json(user);
        } catch (e) {
            throw new Error(`Error DB ${e}`);
        }

    }
};

module.exports = { login, register };
