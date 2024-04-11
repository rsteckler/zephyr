const express = require('express');
const cors = require('cors');
const db = require("./db.js");
const axios = require('axios');

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

app.post('/buggie', (req, res) => {

    const data = '{"entity_id": "switch.template_switch"}';
    axios.post('https://home.ryansteckler.com/api/services/switch/turn_on', data, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzY2VlODA2Njk1MDA0NWJkYjA0MTVhNDc0ODAzNzBiZSIsImlhdCI6MTcxMjg1MTY5NCwiZXhwIjoyMDI4MjExNjk0fQ.ZRDclnxO42nAMkevc6UiCQ6T8LoXGNgcbjm1F3HbZkM'
        }
    })
        .then(response => {
            console.log(response.data);
            res.sendStatus(200);
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
});


app.post('/addleader', (req, res) => {

    var response = "";
    console.log("addleader Request: " + JSON.stringify(req.body));
    if (req) {
        if (req.body) {
            const name = req.body.textbox;
            console.log("leader name: " + JSON.stringify(name));
            db.addLeader(name);                
            response = "ok";
        }
    }

    res.statusCode = 200;
    res.send(response);
});

app.get('/leaders', (req, res) => {
    db.getLeaderboard(res);                
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
