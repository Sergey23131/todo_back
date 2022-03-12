require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const listRouter = require('./routers/list-router');
const cors = require('cors');

const {PORT, MONGO_CONNECT_URL, ALLOWED_ORIGIN, NODE_ENV} = require('./configs/config');
const ErrorHandler = require('./errors/ErrorHandler');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: _configureCors}));


mongoose.connect(MONGO_CONNECT_URL);

app.use('/list', listRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
});

app.listen(PORT, () => {
    console.log(`App listen ${PORT}`);
});

function _configureCors(origin, callback) {

    if (NODE_ENV === 'dev') {
        return callback(null, true);
    }

    const whitelist = ALLOWED_ORIGIN.split(';');

    if (!whitelist.includes(origin)) {
        return callback(new ErrorHandler('Cors is not allowed'), false);
    }
    return callback(null, true);
}
