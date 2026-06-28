import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ msg: 'Hello from the server check CI and CD working...' });
});

export default app;
