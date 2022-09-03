import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
   res.send('Hellow, this is users endpoint');
});

export default router;
