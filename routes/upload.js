const express = require('express');
const multer = require('multer');
const imageService = require('../schema/ImageService');

module.exports = () => {
    // https://github.com/expressjs/multer#memorystorage
    // use memoryStorage to generate buffer for the file
    const upload = multer({ storage: multer.memoryStorage() });
    const router = express.Router();

    router.get('/', (req, res) => {
        res.render('upload');
    });

    router.post('/', upload.any(), (req, res) => {
        const image = {
            data: req.files[0].buffer,
            originalName: req.files[0].originalname,
            contentType: req.files[0].mimetype,
        };

    	// console.log(image['data']);
    	router.addImage(image, (err, docs) => {
    		if (err) {
    			console.log(err.message);
    			throw err;
    		}
    		res.send(docs['_id']);
    		console.log("Successfully inserted one image!");
    	});
    });

    return router;
};
