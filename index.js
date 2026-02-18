import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Olá, mundo! Este projeto está usando ES Modules (import).</h1>');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});