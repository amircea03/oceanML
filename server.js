const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'oceanml-frontend/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/data', (req, res) => {
  const responseData = { message: 'Hello from Express.js!' };
  
  res.json(responseData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'oceanml-frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
