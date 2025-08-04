const db = require("../prisma/queries")

async function getItems(req, res) {
  const categories = await db.queryGetCategories();
  const items = await db.queryGetItems();
  res.render("items/index", { items: items, categories: categories })
};

async function getItem(req, res) {
  const id = parseInt(req.params.id)
  const item = await db.queryGetItem(id);
  res.render("items/item", { item: item })
}

async function createItemGet(req, res) {
  const queryParams = req.query.category
  const categories = await db.queryGetCategories();
  res.render("items/new", { categories: categories, queryParams: queryParams })
}

async function createItemPost(req, res) {
  const { name, price, quantity, categoryId, imageKey, imageId } = req.body;
  const data = {
    name: name, price: price, quantity: parseInt(quantity), imageKey: imageKey,
    imageId: imageId, category: { connect: { id: parseInt(categoryId) } }
  }
  await db.queryCreateItem(data);
  res.redirect('/items')
}

async function updateItemGet(req, res) {
  const id = parseInt(req.params.id)
  const categories = await db.queryGetCategories();
  const item = await db.queryGetItem(id);
  res.render("items/edit", { item: item, categories: categories })
}

async function updateItemPost(req, res) {
  const itemId = parseInt(req.params.id)
  const { name, price, quantity, categoryId, imageKey, imageId } = req.body;
  const data = {
    name: name, price: price, quantity: parseInt(quantity), imageKey: imageKey,
    imageId: imageId, category: { connect: { id: parseInt(categoryId) } }
  }
  const item = await db.queryUpdateItem(itemId, data);
  res.render(`items/item`, { item: item })
}

async function deleteItem(req, res) {
  const itemId = parseInt(req.params.id)
  const { secret } = req.body;
  if (secret === process.env.ADMIN_PASSWORD) {
    await db.queryDeleteItem(itemId);
    return res.redirect('/items')
  } else {
    const categories = await db.queryGetCategories();
    const items = await db.queryGetItems();
    return res.status(400).render("items/index", {
      items: items, categories: categories,
      errors: [{ msg: "Incorrect Password. Item was not deleted" }],
    });
  }
}

module.exports = {
  getItems,
  getItem,
  createItemGet,
  createItemPost,
  updateItemGet,
  updateItemPost,
  deleteItem
}