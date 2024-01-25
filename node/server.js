const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "https://karmahunt.net",
    })
);

app.post('/index', (req, res) => {
    console.log(`got a request`);

    console.log("data is: " + req.body);
    const answer = req.body.textbox;
    console.log("anwqer is: " + answer);

    // Handle the POST request here
    res.send('RFC1035-3.3.14');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
