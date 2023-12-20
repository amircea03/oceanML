const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post('/submit-form', (req, res) => {
    const inputData = req.body.data;

    /*
     * Add API integrations here later.
     * For now all this is doing is echoing data transfer in the form.
     */
    res.send(`Received data: ${inputData}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});