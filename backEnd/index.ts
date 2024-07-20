import express, { Application, Request, Response } from 'express';

const app = express();

const port = process.env.PORT || 3333;

app.use((_req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});