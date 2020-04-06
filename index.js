
// import express from 'express'; // es2015 modules, we're not using them
const express = require('express'); // similar ot above, but works in all node versions

const server = express();

// endpoints

const port = 5000; // the server is running on http://localhost:5000/
server.listen(port, () => console.log(`\n === api running on port ${port} ===\n`))