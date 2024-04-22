import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectToDbMongo.js";

const app = express();
const PORT = process.env.PORT || 5000;


dotenv.config();

// To parse the incoming request with JSON payloads
app.use(express.json()); 

app.use("/api/auth", authRoutes)
// app.get("/", (req, res) => {
//   res.send("hello!!!");
// });


app.listen(PORT, () => {
  connectMongoDB()
  console.log(`Server started ${PORT}`);
});
