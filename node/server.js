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

    var success = false;
    var response = "Wrong answer";
    res.statusCode = 403;

    console.log("Request: " + JSON.stringify(req.body));
    if (req) {
        if (req.body) {
            const answer = req.body.textbox;
            console.log("Attempt: " + JSON.stringify(answer));
            if (answer == "150") {
                success = true;
                response = "RFC1035-3.3.14";
                res.statusCode = 200;
                console.log("Correct Answer");
            }
        }
    }

    res.send(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
