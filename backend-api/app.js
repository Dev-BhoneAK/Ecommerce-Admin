require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const {notFound, errorHandler} = require('./api-v1/middleware/errorHandlerMiddleware');
const database = require('./api-v1/config/database');

const indexRouter = require('./api-v1/routes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
database.connect();

app.use('/api/v1',indexRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
