const { Router } = require("express");
const itemsController = require('../controllers/itemsController')
const itemsRouter = Router();

itemsRouter.get('/', itemsController.getItems)
itemsRouter.post('/', itemsController.createItemPost)
itemsRouter.get('/new', itemsController.createItemGet)
itemsRouter.get('/:id', itemsController.getItem)
itemsRouter.get('/:id/edit', itemsController.updateItemGet)
itemsRouter.post('/:id', itemsController.updateItemPut)


module.exports = itemsRouter;