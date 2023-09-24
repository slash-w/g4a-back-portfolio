import "../../config/database.js";
import "dotenv/config.js";
import Genre from "../Genres.js";

async function deleteAllGenres() {
    try {
      const result = await Genre.deleteMany({});
      
      console.log(`All genres got destroyed, the libtards won, ${result.deletedCount} genres`);
        }
    catch (error) {
        console.error("Error deleting genres:", error);
    }
}
  
deleteAllGenres();