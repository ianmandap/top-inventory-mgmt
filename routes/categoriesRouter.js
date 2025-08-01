const { Router } = require("express");
const categoriesController = require('../controllers/categoriesController')
const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.getCategories)
categoriesRouter.post('/', categoriesController.createCategoryPost)
categoriesRouter.get('/new', categoriesController.createCategoryGet)
categoriesRouter.get('/:id', categoriesController.getCategory)
categoriesRouter.get('/:id/edit', categoriesController.updateCategoryGet)
categoriesRouter.post('/:id', categoriesController.updateCategoryPost)

module.exports = categoriesRouter;