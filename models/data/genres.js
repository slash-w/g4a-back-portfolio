import "../../config/database.js";
import "dotenv/config.js";
import Genre from "../Genres.js";
import Game from "../Games.js"



async function uploadGenres() {
    try {
        const games = await Game.find()
        try{
            for (const game of games) {
                for(const genre of game.genres){
                    const existingGenre = await Genre.findOne({ id: genre.id });
        
                    if (!existingGenre) {
                        await Genre.create(genre);
                        console.log(`Genre "${genre.description}" added to the database.`);
                    } else {
                        console.log(`Genre "${genre.description}" already exists in the database. Skipping.`);
                    }
                }
                
            }
        
            console.log("Genres data uploaded successfully!");
            } catch (error) {
            console.error("An error occurred uploading the genres:", error);
            }
        }
        catch{
            console.error("An error occurred fetching the games:", error);
        }
    }
    
uploadGenres();