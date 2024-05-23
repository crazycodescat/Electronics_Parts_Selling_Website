import express from 'express';
import env from 'dotenv';
import cors from 'cors';

const app = express();
env.config();

// Use middleware to parse JSON and handle URL-encoded data
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
// app.use('/api/products', productsRoute);
// app.use('/api/user', userRoutes);
// app.use('/api/cart', requireAuth, cartRoutes);

app.get('/', (req, res) => {
  res.send('Hello World.');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
