// Created by Yuxi Luo, Nov 2019

const express = require('express');

const data = [
    {
        field: "Systems Development",
        proj: [
            {
                name: "Software Engineer Intern @ Genesis Global Trading",
                link: "https://genesistrading.com/",
                date: "May 2020 - August 2020",
                subfield: "Back-end Development | Golang ",
                content: [
                    "Improved database schema and updated symbol parsing algorithm to populate database with new market data in Golang, and equipped traders with comprehensive data to analyze spot and derivatives markets and perform algorithmic trading",
                    "Developed a reliable data streamer of an exchange on a second-by-second basis for all provided markets (Bitcoin, LTC, etc)",
                    "Designed and developed an LRU data structure to maintain a dynamic list of 100 tradable markets for real-time trading on distributed systems",
        		],
            },
        ],
    },
    {
        field: "Web Development",
        proj: [
            {
                name: "Software Engineer Intern @ Goldman Sachs",
                link: "https://www.goldmansachs.com/",
                date: "June 2019 - August 2019",
                subfield: "Full-stack Development | Java ",
                content: [
        		    "Developed a backend micro-service to track business approval status across an in-house web management system in Java",
        		    "Revamped and implemented a business-oriented workflow that communicates with backend services of the application",
        		],
            },
        ],
    },
    {
        field: "Teaching Assistant",
        proj: [
            {
                name: "Teaching Assistant @ New York University",
                link: "",
                date: "September 2017 - May 2020",
                subfield: "Object-Oriented Programming | Unix System Programming",
                content: [
                    "Led Object-Oriented Programming in C++ from 2017 to 2019, and Unix System Programming in C in 2020",
                    "Taught lab materials and assisted debugging for >170 students, held office hours, and graded assignments",
                ],
            },
        ],
    },
];

module.exports = () => {
    const router = express.Router();

    router.get('/', (req, res) => {
        res.render('experience', {data: data});
    });

    return router;
};
