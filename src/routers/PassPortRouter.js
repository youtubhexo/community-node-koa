const Router = require('@koa/router');
const router = new Router();

import PassPortController from '../api/PassPortController';

router.get('/getCaptcha',PassPortController.getCaptcha);

export  default router;