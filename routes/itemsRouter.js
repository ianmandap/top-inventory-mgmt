const { Router } = require("express");
const itemsController = require('../controllers/itemsController')
const itemsRouter = Router();

itemsRouter.get('/', itemsController.getItems)
itemsRouter.get('/new', itemsController.createItemGet)
itemsRouter.post('/', itemsController.createItemPost)

module.exports = itemsRouter;