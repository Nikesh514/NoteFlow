import express from 'express';
import dotenv from 'dotenv'
import connectDB from './config/db-connects';

//inporting auth routes
import authRoutes from './routes/auth.routes'
import { errorHandler } from './middleware/errorhandler.middleware';

const app = express();
const PORT = process.env.PORT || 8000
const DB_URI = process.env.DB_URI ?? ''





app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'server is running'
    })
})

app.use('/api/auth', authRoutes)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    connectDB();
})