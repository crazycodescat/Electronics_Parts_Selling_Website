import express from 'express';
import env from 'dotenv';
import cors from 'cors';

const app = express();
env.config();

// Use middleware to parse JSON and handle URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World.');
});

app.post('/rfq', (req, res) => {
  console.log(req.body); // Log full body to see parsed data
  const { fullName } = req.body;
  console.log(fullName);
  // ... rest of your route logic
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
