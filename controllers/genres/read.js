import Genre from "../../models/Genres.js";

export default async (req, res, next) => {
  try {
    // Retrieve all genres from the "genres" collection
    const genres = await Genre.find();

    // Send the list of genres as a response
    return res.status(200).json({
      success: true,
      message: "All genres retrieved",
      genres: genres,
    });
  } catch (error) {
    console.error("An error occurred in getGenreInfo controller:", error);
    next(error);
  }
};
