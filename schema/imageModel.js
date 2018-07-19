// Created by Yuxi Luo, July 2018

const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    data: Buffer,
	originalName: String,
	contentType: String,
});

module.exports = mongoose.model('Image', imageSchema);
