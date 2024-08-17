const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port=8000;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', (req, res) => {
  const url = `https://localhost:8000${req.originalUrl}`;
  axios({
    method: req.method,
    url: url,
    data: req.body,
    headers: req.headers,
  })
    .then(response => res.send(response.data))
    .catch(error => res.status(error.response ? error.response.status : 500).send(error.message));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
