const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

var rawBodyHandler = function (req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
        console.log('Raw body: ' + req.rawBody);
    }
}

// app.post('/index', cors(), (req, res) => {
//     console.log(`got a request`);

//     console.log("data is: " + req.body);
//     const answer = req.body.textbox;
//     console.log("anwqer is: " + answer);

//     // Handle the POST request here
//     res.send('RFC1035-3.3.14');
// });

app.use(express.json());

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
