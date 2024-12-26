import express from 'express';
import cors from 'cors';
import router from './app/routes';
import cookieParser from 'cookie-parser';
import notFoundHandler from './app/middlewares/notFoundHandeler';
import globalErrorHabdeler from './app/middlewares/globalErrorHandeler';

const app = express();

// Enable cookie parsing
app.use(cookieParser());

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for handling CORS with credentials
app.use(cors({
  origin: [
    'https://portfolio-rahul-admin.vercel.app',
    'https://developer-rahul.vercel.app',
    'http://localhost:5173',
    'http://localhost:5174',
  ],
  credentials: true,
}));


// Root route
app.get('/', (req, res) => {
  res.send("Welcome to bike rental");
});

// Application routes
app.use('/api/v1', router);

// Catch-all route for handling 404 errors
app.use(notFoundHandler);

// Global error handling middleware
app.use(globalErrorHabdeler);

app.post("/api/v1/services", async (req, res) => {
  try {
    // Handle your logic
    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


export default app;
