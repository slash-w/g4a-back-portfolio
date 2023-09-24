import Router from 'express';
import read from '../controllers/genres/read.js';
let genres_router = Router();


genres_router.get('/', read)

export default genres_router;