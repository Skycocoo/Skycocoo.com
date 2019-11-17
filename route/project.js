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
                name: "Checkers Game",
                link: "https://vimeo.com/266762101",
                date: "April 2018",
                subfield: "C++ | OpenGL | Artificial Intelligence",
                content: [
                    "Developed an interactive checker game with user interface created from scratch with OpenGL",
                    "Implemented Min-Max Search with Alpha-Beta Pruning algorithm for AI logic",
                ],
            },
            {
                name: "Platformer Game - Racing",
                link: "https://vimeo.com/298454239",
                date: "April 2018",
                subfield: "C++ | OpenGL | glsl (OpenGL Shading Language)",
                content: [
                    "Developed a 2-player platformer game from scratch with OpenGL",
                    "Modified shader to display special lighting effect for the 2D game",
                ],
            },
        ],
    },
    {
        field: "Web Development",
        proj: [
            {
                name: "Software Engineering Intern @ Goldman Sachs",
                link: "",
                date: "June 2019 - August 2019",
                subfield: "Full-Stack Development | Java ",
                content: [
                    "Developed a reusable backend micro-service for an internal web application with Java",
                    "Refined local time and time zone difference calculation with latest Java SE8 Date / Time package"
                ],
            },
        ],
    },
    {
        field: "Theory",
        proj: [
            {
                name: "Rank Pairing Heap",
                link: "https://skycocoo.github.io/Rank-Pairing-Heap/",
                date: "May 2019",
                subfield: "Data Structure | Visualization | JavaScript",
                content: [
                    "Visualized Rank Pairing Heap (a heap data structure with optimal time complexity) in JavaScript"
                ],
            },
        ],
    },
    // {
    //     field: "3D Modeling",
    // },
];

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.render('project', {data: data});
    });

    return router;
};
