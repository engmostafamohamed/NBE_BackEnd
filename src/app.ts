import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/database";
import routes from "./routes";
import i18nMiddleware from "./middlewares/i18n"; // <-- make sure you have this middleware
import { setupSwagger } from "./config/swagger";
import passport from "passport";
import session from "express-session";

// import "./config/passport"; // Register passport strategies globally
dotenv.config();

const app = express();
const isProduction = process.env.NODE_ENV === "production";

// Sessions & Passport (optional)
// app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// Core middlewares
app.use(cors());
app.use(helmet());
app.use(compression());

if (!isProduction) {
  app.use(morgan("dev"));
}

app.use(express.json());

// Localization middleware
app.use(i18nMiddleware);

// Test route
app.get("/", (req, res) => {
  res.send("Hello in Alahly project");
});

// Routes
app.use("/api", routes);

// Swagger documentation
setupSwagger(app);

// Connect DB at startup
connectDB();

export default app;
