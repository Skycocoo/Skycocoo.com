// Created by Yuxi Luo, Nov 2019

const express = require('express');

const data = [
    {
        field: "Systems Development",
        proj: [
            {
                name: "C0 Compiler",
                link: "",
                date: "December 2021",
                subfield: "Compiler Development | OCaml",
                content: [
                    "Designed and implemented a C0 compiler from scratch in OCaml, which includes a number of optimizations to ensure that the generated assembly code is comparable to GCC -O1 performance, including Register Allocation, Single Static Assignment, Constant / Copy Propagation, Dead Code Elimination, Dataflow Analysis, and more",
                ],
            },
            {
                name: "x86-32 Kernel",
                link: "",
                date: "April 2021",
                subfield: "Operating System | C | x86-64 Assembly",
                content: [
                    "Designed and implemented an x86-32 kernel from scratch in C, which supports context switching, interrupt handling, task and thread management, scheduling, virtual memory, synchronization primitives, and device drivers",
                ],
            },
            {
                name: "Song List over Time - A System Synchronized with Raft",
                link: "",
                date: "Dec 2018",
                subfield: "Full-Stack Development | Golang",
                content: [
                    "Built a distributed backend system from scratch and a frontend system in Golang with Iris web framework",
                    "Implemented the reliable replica synchronization strategy - Raft consensus algorithm",
                    "Handled concurrent requests reliably which is tested by Vegeta stress testing framework",
                ],
            },
        ],
    },
    {
        field: "Data Science",
        proj: [
            {
                name: "Donation Statistics Analysis",
                link: "https://github.com/CMU-IDS-2020/fp-vectorization/blob/main/documents/Report.pdf",
                date: "December 2020",
                subfield: "Data Science | Visualization | Python",
                content: [
                    "Visualized donation statistics from DonorsChoose.org to help further analysis on education donations"
                ],
            },
        ],
    },
    {
        field: "Computer Vision",
        proj: [
            {
                name: "Multiple Sclerosis Lesion Segmentation using 3D U-Net",
                link: "https://github.com/Skycocoo/MS-Lesion-Segmentation",
                date: "Jan 2019 - May 2019",
                subfield: "Image Segmentation | Python | Keras | U-Net",
                content: [
        		    "Built a 3D U-Net structure to process Magnetic Resonance Imaging (MRI) data in Python with Keras framework",
        		    "Implemented a sliding window approach to generate unique batches of training samples from only 15 available images",
        		    "Utilized Dice Score loss function to achieve a model with 71% cross-validation accuracy",
                ],
            },
            {
                name: "Embedding Tracking Codes in Additive Manufactured Parts for Product Authentication",
                link: "https://onlinelibrary.wiley.com/doi/full/10.1002/adem.201800495",
                date: "June 2017 - Aug 2017",
                subfield: "Image Processing | Python | OpenCV",
                content: [
        		    "Analyzed low-contrast images with histogram and used OpenCV techniques to upsample images",
        		    "Implemented a pixel-wise comparison algorithm between sample images and their corresponding reference images",
                    "Published a paper in Advanced Engineering Materials titled “Embedding tracking codes in additive manufactured parts for product authentication”",
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
                name: "Game of Life Visualization",
                link: "https://skycocoo.github.io/CS3314-PL-GLSL-Presentation/",
                date: "December 2019",
                subfield: "C++ | OpenGL | glsl (OpenGL Shading Language)",
                content: [
                    "Presented in-class about GLSL language and Computer Graphics",
                    "Demoed live to illustrate the ease of GLSL for visualization",
                ],
            },
            {
                name: "Kimetsu Game",
                link: "https://vimeo.com/457815932",
                date: "December 2019",
                subfield: "GameMakerStudio | Dungeon Game",
                content: [
                    "Developed a dungeon game in a group of 3, featuring characters in the anime “Demon Slayer: Kimetsu no Yaiba”",
                ],
            },
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
                name: "Platformer Game: Racing",
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
];

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.render('project', {data: data});
    });

    return router;
};
