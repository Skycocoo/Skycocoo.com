// Created by Yuxi Luo, Nov 2019

const express = require('express');

const data = [
    {
        field: "Computer Vision",
        proj: [
            {
                name: "Multiple Sclerosis Lesion Segmentation using 3D U-Net",
                link: "https://github.com/Skycocoo/MS-Lesion-Segmentation",
                date: "Jan 2019 - Present",
                subfield: "Image Segmentation | Python | Keras | U-Net",
                content: [
                    "Modified 2D U-Net structure to work on 3D Magnetic Resonance Imaging data with Keras framework",
                    "Implemented sliding window approach to generate data patches based on only 15 available images",
                    "Achieved 0.71 / 1.00 Dice Score training result trained with Dice Score loss function",
                ],
            },
            {
                name: "Embedding Tracking Codes in Additive Manufactured Parts for Product Authentication",
                link: "https://onlinelibrary.wiley.com/doi/full/10.1002/adem.201800495",
                date: "June 2017 - Aug 2017",
                subfield: "Image Processing | Python | OpenCV",
                content: [
                    "Authenticated 3D printed products based on Computed Tomography images",
                    "Analyzed low-contrast images with histogram and improved the image quality with OpenCV package",
                    "Implemented pixel-wise comparison and matching for the images and their corresponding references",
                ],
            },
            {
                name: "Color-based Object Tracking Using Webcams",
                link: "https://github.com/Skycocoo/Color-Based-Object-Tracking-Using-Webcams",
                date: "July 2015",
                subfield: "Image Processing | Python | OpenCV",
                content: [
                    "Developed a real-time object tracking system based on color",
                    "Enhanced tracking precision with noise removal method",
                ],
            },
        ],
    },
    {
        field: "Game Engineering",
        proj: [
            {
                name: "",
                link: "",
                date: "",
                subfield: "",
                content: [
                    "",
                ],
            },
        ],
    },
    {
        field: "Web Development",
    },
    {
        field: "Theory",
    },
    {
        field: "3D Modeling",
    },
];

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.render('project', {data: data});
    });

    return router;
};
