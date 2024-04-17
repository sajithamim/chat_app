import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js"
const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();
app.get("/", (req, res) => {
  res.send("hello!!!");
});

app.use("/api/auth", authRoutes)
app.listen(PORT, () => console.log(`Server started ${PORT}`));
