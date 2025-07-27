const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

async function getItems(req, res) {
  // const searchParams = req.query.search
  // const filterParams = req.query.filter

  const items = await prisma.item.findMany();
  res.json(items);
  // const data = await db.getAllUsernames(searchParam);
  // res.send(data)
};

module.exports = {
  getItems
}