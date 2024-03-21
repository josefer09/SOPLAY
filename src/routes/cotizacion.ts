import express from 'express';
import { crearCotizacion } from '../controllers/cotizacion';

const router = express.Router();

// Area Publica
router.post('/', crearCotizacion);

export default router;