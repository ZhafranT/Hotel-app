import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyisAdmin } from '../utlis/verifyToken.js';

const router = express.Router();

// CREATE
router.post('/:hotelid', verifyisAdmin, createRoom);

// UPDATE
router.put('/:id', verifyisAdmin, updateRoom);

// DELETE
router.delete('/:id/:hotelid', verifyisAdmin, deleteRoom);

// GET
router.get('/:id', getRoom);

// GET ALL
router.get('/', getRooms);

export default router;
