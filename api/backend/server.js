const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const tourRoutes = require("./routes/tourRoute");
const paymentRoutes = require("./routes/paymentRoute");

const port = process.env.PORT || 5000;

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/tours", tourRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => res.send("Hello World"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
