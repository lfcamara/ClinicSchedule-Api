import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Lista de horarios');
});

router.get('/:');

export default router;
