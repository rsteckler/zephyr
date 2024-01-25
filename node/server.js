const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.post('/index', cors(), (req, res) => {
    console.log(`got a request`);

    console.log("data is: " + req.body);
    const answer = req.body.textbox;
    console.log("anwqer is: " + answer);

    // Handle the POST request here
    res.send('RFC1035-3.3.14');
});

app.use(bodyParser.json());

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
