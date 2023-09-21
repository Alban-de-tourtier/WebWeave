import express from 'express';
import bodyParser from 'body-parser';
import aboutRouter from './routes/about';
import homeRouter from './routes/home';
import experiencesRouter from './routes/experiences';
import contactRouter from './routes/contact';

const app = express();
const cors = require('cors');
const corsOptions = {
  origin: `${process.env.WEBURL}`,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Middleware
app.use(bodyParser.json());
app.use(express.json());

app.use(cors(corsOptions));

// API routes
app.use('/api/home', homeRouter);
app.use('/api/about', aboutRouter);
app.use('/api/experiences', experiencesRouter);
app.use('/api/contact', contactRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});