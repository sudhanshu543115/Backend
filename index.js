import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import MovieRoute from "./route/Movie.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();


app.use(cors({
  origin: ["https://filmflixnow-liard.vercel.app"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error connecting to mongoDB:", error);
}


app.use("/Movie", MovieRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
