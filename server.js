const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Define MIME type for CSS files
express.static.mime.define({ 'text/css': ['css'] });

// Serve static files
app.use(express.static(path.join(__dirname, 'static')));

// Body parser middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.post('/submit-form', (req, res) => {
    const inputData = req.body.data;

    /*
     * Add API integrations here later.
     * For now, all this is doing is echoing data transfer in the form.
     */
    res.send(`Received data: ${inputData}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
