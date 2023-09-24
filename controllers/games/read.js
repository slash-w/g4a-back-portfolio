import Game from "../../models/Games.js";

async function read(req, res, next) {
  const { genres, name, featured, onSale, qtty, page } = req.query;
  const perPage =  parseInt(qtty);
  const discount = parseInt(onSale);
  const queries = {};
  const sort = { name: 1 }; // Ascending order by name

  if (name) {
    queries.name = { $regex: name.trim(), $options: "i" };
  }
  if (genres) {
    const genreIds = genres.trim().split(",").map((genre) => genre.trim()); // Parse genre IDs as strings
    queries.genres = { $elemMatch: { id: { $in: genreIds } } };
  }
  if (featured){
    queries.featured = true
  }
  if (discount > 0) {
    queries.discount = { $gt: 0 };
  }

  console.log('<<<< games per page >>>>', perPage)

  try {
    const totalGames = await Game.countDocuments(queries);
    const totalPages = Math.ceil(totalGames / perPage);

    let currentPage = parseInt(page, 10) || 1;
    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    const skip = (currentPage - 1) * perPage;
    const games = await Game.find(queries)
      .select("-createdAt -updatedAt")
      .sort(sort)
      .skip(skip)
      .limit(perPage);

    const prevPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const pagination = {};
    if (prevPage !== null) {
      pagination.prev = prevPage;
    }
    if (nextPage !== null) {
      pagination.next = nextPage;
    }

    return res.status(200).json({
      totalPages,
      games,
      success: true,
      pagination,
    });
  } catch (error) {
    next(error);
  }
}

export default read;
