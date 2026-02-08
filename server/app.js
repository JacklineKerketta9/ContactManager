import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

// Middlewares
app.use(cors({
  origin: "https://contact-manager-two-tau.vercel.app",
  credentials: true
}));


app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

// Error handler
app.use(errorMiddleware);

export default app;
