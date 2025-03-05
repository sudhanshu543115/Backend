import express from "express";
import { getMovie, getMovieById } from "../controller/Movie.controller.js";

const router = express.Router();

// Route to get all movies
router.get("/", getMovie);

// Route to get a movie by ID
router.get("/:id", getMovieById);

export default router;
