import Game from "../../models/Games.js";

export default async function (req, res, next) {
  try {
    const idGame = req.params.id;
    // Encontrar y eliminar el capítulo en la base de datos
    const game = await Game.findOneAndDelete({ _id: idGame });
    if (!game) {
      return res.status(404).json({ error: "Juego no encontrado" });
    }

    res.json({ message: "Juego eliminado exitosamente" });
  } catch (err) {
    return next(err);
  }
}
