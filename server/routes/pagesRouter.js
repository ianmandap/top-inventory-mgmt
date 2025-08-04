const { Router } = require("express");
const pagesController = require('../controllers/pagesController')
const pagesRouter = Router();

pagesRouter.get('/', pagesController.getHome)

module.exports = pagesRouter;