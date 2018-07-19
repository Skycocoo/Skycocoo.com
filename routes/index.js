const express = require('express');
const uploadRouter = require('./upload');

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res, next) => {
        res.render('index');
    });

    router.use('/upload', uploadRouter());

    return router;
};
