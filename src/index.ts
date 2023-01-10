import express from 'express';
import { config } from 'dotenv';

config();
const app = express();
const PORT = process.env.PORT;

app.get('/', (_req, res) => {
  res.json({ message: 'guena po mierda' });
});

app.listen(PORT, () => {
  console.log(`app en puerto ${PORT}`);
});
