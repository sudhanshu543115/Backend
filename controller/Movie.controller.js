import fs from 'fs';
import path from 'path';

// Load movies.json file
const filePath = path.resolve('movies.json');
let movies = [];

// Read movies from the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading movies.json:', err);
    } else {
        movies = JSON.parse(data); // Parse and store the movies in memory
    }
});

// Get all movies
export const getMovie = (req, res) => {
    res.status(200).json(movies);
};

// Get movie by ID
// Get movie by ID
export const getMovieById = (req, res) => {
    const { id } = req.params;
    const movie = movies.find((movie) => movie.id === Number(id)); // Convert id to a number

    if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json(movie);
};

