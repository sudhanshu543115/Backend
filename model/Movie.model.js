import mongoose from "mongoose";

// Movie schema definition
const movieSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,  // Custom unique identifier, but not re-indexing _id
      unique: true      // Ensures _id is unique but does not require custom indexing
    },
    name: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    actors: {
      type: [String],  // Array of strings for actors
      required: true
    },
    release_date: {
      type: Date,
      required: true
    },
    story: {
      type: String,
      required: true
    },
    screenshot_image: {
      type: String,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    main_image: {
      type: String,
      required: true
    }
  },
  { timestamps: true }  // Adds createdAt and updatedAt timestamps
);

// No need to manually add a custom index on '_id' field
// The default index on '_id' is managed by MongoDB

// Create and export the Movie model based on the schema
const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
