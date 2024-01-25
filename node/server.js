const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.post('/index', (req, res) => {
    console.log(`got a request`);

    // Handle the POST request here
    res.send('Received POST request');
});

app.use(
    cors({
        credentials: true,
        origin: "https://karmahunt.net",
    })
);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
