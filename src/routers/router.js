
const combineRouters = require('koa-combine-routers')

const aRouter=require('./aRouter')
const bRouter=require('./bRouter')

import passPortRouter from './PassPortRouter'

const router = combineRouters(
  aRouter,
  bRouter,
  passPortRouter
)
 
module.exports = router