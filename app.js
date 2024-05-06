const express = require('express');
const bodyParser = require('body-parser');
const helper = require('./helper.js');
const app = express();
const port = 3000;

app.timeout = 300000;

app.use(bodyParser.json({ limit: '100mb' }));

app.get('/', (req, res) => {
  res.send('Womp womp');
});

app.post('/random-matrix', (req, res) => {
  const { N } = req.body;

  const matrix = helper.getRandomMatrix(N);

  res.json(matrix);
});

app.post('/multiply-matrix-vector', (req, res) => {
  const { matrix, vector } = req.body;

  const result = helper.multiplyMatrixByVector(matrix, vector);

  res.json(result);
});

app.post('/multiply-matrixes', (req, res) => {
  const { matrix1, matrix2 } = req.body;

  const result = helper.multiplyMatrixes(matrix1, matrix2);

  res.json(result);
});

app.post('/add-matrixes', (req, res) => {
  const { matrix1, matrix2 } = req.body;

  const result = helper.addMatrixes(matrix1, matrix2);

  res.json(result);
});

app.post('/multiply-vectors', (req, res) => {
  const { vector1, vector2 } = req.body;

  const result = helper.multiplyVectors(vector1, vector2);

  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
