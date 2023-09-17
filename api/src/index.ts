import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './routes/about';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
// API routes
app.use('/api/about', usersRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});