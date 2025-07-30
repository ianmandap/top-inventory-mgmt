const db = require("../prisma/queries")

async function getItems(req, res) {
  const categories = await db.queryGetCategories();
  const items = await db.queryGetItems();
  res.render("items/index", { items: items, categories: categories })
};

async function createItemGet(req, res) {
  const categories = await db.queryGetCategories();
  res.render("items/new", { categories: categories })
}

async function createItemPost(req, res) {
  const { name, price, quantity, categoryId, imageKey, imageId } = req.body;
  const data = {
    name: name, price: price, quantity: parseInt(quantity), imageKey: imageKey,
    imageId: imageId, category: { connect: { id: parseInt(categoryId) } }
  }
  await db.queryCreateItem(data);
  res.redirect('items')
}

async function updateItemGet(req, res) {
  const id = req.params.id
  const item = await db.queryFindItem();
  res.render("items/edit", { item: item })
}

module.exports = {
  getItems,
  createItemGet,
  createItemPost
}