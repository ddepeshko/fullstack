const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const analyticsRoutes = require('./routes/analytics');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');
const { mongoUri } = require('./config/keys');

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('MongoDB Connected'))
    .catch((e)=> console.log(`Error connect to DB ${e}`))

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);


module.exports = app;
