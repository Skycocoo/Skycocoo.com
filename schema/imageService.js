const imageModel = require('./imageModel');

module.exports = {
    getAll: async function(callback) {
        imageModel.find({}, callback);
    },
    getOne: async function(id, callback) {
        // or:
        // return imageModel.findOne({ _id: id }, callback);
        imageModel.findById(id, callback);
    },
    create: async function(data, callback) {
        // or:
        // const image = new imageModel(data, callback);
        // return image.save();
        imageModel.create(data, callback);
    },
    remove: async function(condition, callback) {
        imageModel.remove(condition, callback);
    },
};
