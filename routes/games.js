import Router from "express";
import read_one from "../controllers/games/read_one.js";
import read from "../controllers/games/read.js";
import gameUpdate from "../schemas/game/updateGame.js";
import updateGame from "../controllers/games/update.js";
import destroyGame from "../controllers/games/destroy.js";
import passport from "../middlewares/passport.js";
import validator from "../middlewares/validator.js";
import create from "../controllers/games/create.js"

const game_router = Router();

game_router.get("/", read);
game_router.get("/:id", read_one);
game_router.put("/:id",  updateGame);
game_router.delete("/:id",  destroyGame);
game_router.post("/create", create)

export default game_router;
