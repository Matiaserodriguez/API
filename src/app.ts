import cors from 'cors';
import express, {Application} from 'express';
import morgan from 'morgan';

import authRoutes from './route';


const app: Application = express();

// Port
app.set('port', 3000);

// Middelware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', authRoutes);

export default app;
