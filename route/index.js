// Created by Yuxi Luo, July 2018

const express = require('express');
const uploadRouter = require('./upload');
const photoRouter = require('./photo');

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res, next) => {
        res.render('index');
    });

    router.use('/upload', uploadRouter());
    router.use('/photo', photoRouter());

    return router;
};