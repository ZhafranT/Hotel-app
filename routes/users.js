import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyisAdmin, verifyToken, verifyUser } from '../utlis/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//    res.send('Hellow user, you are logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//    res.send('Hellow user, you are logged in and you can delete it');
// });

// router.get('/checkadmin/:id', verifyisAdmin, (req, res, next) => {
//    res.send('Hellow admin, you are logged in and you can delete all accounts');
// });

// UPDATE
router.put('/:id', verifyUser, updateUser);

// DELETE
router.delete('/:id', verifyUser, deleteUser);

// GET
router.get('/:id', verifyUser, getUser);

// GET ALL
router.get('/', verifyisAdmin, getUsers);

export default router;
