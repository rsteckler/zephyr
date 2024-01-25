const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.post('/index', cors(), (req, res) => {
    console.log(`got a request`);

    // Handle the POST request here
    res.send('RFC1035-3.3.14');
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
