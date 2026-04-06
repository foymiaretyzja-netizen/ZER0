const express = require('express');
const app = express();
const path = require('path');

// This tells Node to serve everything in the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// This ensures that going to your URL opens index.html by default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
