import express from 'express';
import {
  getCycles,
  getCycleById,
  createCycle,
  updateCycle,
  deleteCycle,
  searchCycles,
  getCycleStats, // tambahan
} from '../controllers/cycleController';

import { authenticateToken } from '../middleware/authMiddleware';
import { authorizeRole } from '../middleware/authorizeMiddleware';

const router = express.Router();

router.use(authenticateToken);

// Endpoint umum untuk semua user dan admin
router.get('/', getCycles);
router.get('/search', searchCycles);
router.get('/:id', getCycleById);
router.post('/', createCycle);
router.put('/:id', updateCycle);
router.delete('/:id', deleteCycle);

// Endpoint khusus admin untuk statistik
router.get('/stats', authorizeRole('admin'), getCycleStats);

export default router;
