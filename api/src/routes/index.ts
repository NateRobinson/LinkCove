import middleware from '@blocklet/sdk/lib/middlewares';
import { Router } from 'express';

const router = Router();

router.use('/user', middleware.user(), (req: any, res) => res.json(req.user || {}));

export default router;
