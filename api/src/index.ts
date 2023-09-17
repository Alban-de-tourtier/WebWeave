import express from 'express';
import bodyParser from 'body-parser';
import aboutRouter from './routes/about';
import homeRouter from './routes/home';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
// API routes
app.use('/api/home', homeRouter);
app.use('/api/about', aboutRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});