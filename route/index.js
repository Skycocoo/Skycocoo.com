// Created by Yuxi Luo, July 2018

const express = require('express');
// const uploadRouter = require('./upload');
const photoRouter = require('./photo');
const projectRouter = require('./project');
const experienceRouter = require('./experience');

const path = require('path');

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res, next) => {
        res.render('index');
    });

    router.get('/about', (req, res, next) => {
        res.render('about');
    });

    router.get('/resume', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, '../') + '/public/file/Yuxi_Luo_Resume_Objective.pdf');
    });

    // router.use('/upload', uploadRouter());
    router.use('/photo', photoRouter());
    router.use('/project', projectRouter());
    router.use('/experience', experienceRouter());

    return router;
};
