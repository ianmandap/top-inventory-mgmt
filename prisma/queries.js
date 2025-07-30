const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

async function queryGetItems() {
  return await prisma.item.findMany({ include: { category: true } });
}

async function queryGetCategories() {
  return await prisma.category.findMany();
}

async function queryFindItem() {
  return await prisma.item.findFirst({ where: { id: id } })
}

async function queryCreateItem(data) {
  return await prisma.item.create({ data: data });
}

module.exports = {
  queryGetItems,
  queryGetCategories,
  queryFindItem,
  queryCreateItem
};
