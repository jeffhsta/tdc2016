const express = require('express');
const fs = require('fs');
const yaml= require('js-yaml');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const file_content = fs.readFileSync('evil.yml', 'utf8');
  const data = yaml.load(file_content);
  res.send(data);
});

app.post('/upload', (req, res) => {
  res.send('WIP...')
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
