import express from 'express';
import bodyParser from 'body-parser';
import aboutRouter from './routes/about';
import homeRouter from './routes/home';

const app = express();
const cors = require('cors'); // Import the cors middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middleware
app.use(bodyParser.json());
app.use(express.json());

app.use(cors(corsOptions)); // Use the cors middleware with your options

// API routes
app.use('/api/home', homeRouter);
app.use('/api/about', aboutRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});