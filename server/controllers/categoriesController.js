const db = require("../prisma/queries")

async function getCategories(req, res) {
  const categories = await db.queryGetCategories();
  res.json({ categories: categories })
};

async function getCategory(req, res) {
  const id = parseInt(req.params.id)
  const category = await db.queryGetCategory(id);
  res.json({ category: category, items: category.items })
}

async function createCategoryGet(req, res) {
  res.render("categories/new")
}

async function createCategoryPost(req, res) {
  const { name } = req.body;
  const category = await db.queryCreateCategory({ name: name });
  res.json({ category: category })
  // res.redirect('/categories')
}

async function updateCategoryGet(req, res) {
  const id = parseInt(req.params.id)
  const category = await db.queryGetCategory(id);
  res.json({ category: category })
  // res.render("categories/edit", { category: category })
}

async function updateCategoryPost(req, res) {
  const categoryId = parseInt(req.params.id)
  const { name } = req.body;
  const data = {
    name: name
  }
  const category = await db.queryUpdateCategory(categoryId, data);
  const categories = await db.queryGetCategories();
  res.json({ category: category, categories: categories, items: category.items })
  // res.render(`categories/category`, { category: category, categories: categories, items: category.items })
}

async function deleteCategory(req, res) {
  const categoryId = parseInt(req.params.id)
  const { secret } = req.body;
  if (secret === process.env.ADMIN_PASSWORD) {
    await db.queryDeleteCategory(categoryId);
    return res.redirect('/categories');
  } else {
    const categories = await db.queryGetCategories();
    const category = await db.queryGetCategory(categoryId);
    return res.status(400).render("categories/category", {
      categories: categories, items: category.items, category: category,
      errors: [{ msg: "Incorrect Password. Category was not deleted" }],
    });
  }
}

module.exports = {
  getCategories,
  getCategory,
  createCategoryGet,
  createCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
  deleteCategory
}