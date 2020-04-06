
// import express from 'express'; // es2015 modules, we're not using them
const express = require('express'); // similar ot above, but works in all node versions

const server = express();

// endpoints
server.get('/', (req, res) => {
    res.json({ api: 'running.....'});
})

server.get('/api/hubs/', (req, res) => {
    const hubs = [
        {
            id: 1,
            name: 'web28',
            lessonId: 1,
            cohort: 'web28'
        },
        {
            id: 2,
            name: 'web28',
            lessonId: 1,
            cohort: 'web28'
        },
        {
            id: 3,
            name: 'web28',
            lessonId: 1,
            cohort: 'web28'
        },
    ]
    
    res.json(hubs);
})

const port = 5000; // the server is running on http://localhost:5000/
server.listen(port, () => console.log(`\n === api running on port ${port} ===\n`))