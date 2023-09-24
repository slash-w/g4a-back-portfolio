import express from "express";
import game_router from "./games.js";
import comment_router from "./comments.js";
import auth_router from "./users.js";
import genres_router from "./genres.js"

let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/games", game_router);
router.use("/comment", comment_router);
router.use("/auth", auth_router);
router.use("/genres", genres_router)
export default router;
