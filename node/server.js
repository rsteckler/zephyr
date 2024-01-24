const express = require('express');
const app = express();
const port = 3000;

app.post('/index', (req, res) => {
    // Handle the POST request here
    res.send('Received POST request');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
