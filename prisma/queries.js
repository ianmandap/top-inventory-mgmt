const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

async function queryGetItems() {
  return await prisma.item.findMany({ include: { category: true } });
}

async function queryGetItem(itemId) {
  return await prisma.item.findUnique({
    where: { id: itemId }, include: { category: true }
  })
}

async function queryCreateItem(data) {
  return await prisma.item.create({ data: data });
}

async function queryUpdateItem(itemId, data) {
  return await prisma.item.update({ where: { id: itemId }, data: data, include: { category: true } });
}

async function queryGetCategories() {
  return await prisma.category.findMany();
}

async function queryGetCategory(categoryId) {
  return await prisma.category.findUnique({
    where: { id: categoryId }, include: { items: { include: { category: true } } }
  })
}

async function queryCreateCategory(data) {
  return await prisma.category.create({ data: data });
}

async function queryUpdateCategory(categoryId, data) {
  return await prisma.category.update({ where: { id: categoryId }, data: data, include: { items: { include: { category: true } } } });
}

module.exports = {
  queryGetItems,
  queryGetItem,
  queryCreateItem,
  queryUpdateItem,
  queryGetCategories,
  queryGetCategory,
  queryCreateCategory,
  queryUpdateCategory
};
