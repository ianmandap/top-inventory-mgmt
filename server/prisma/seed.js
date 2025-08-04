const { PrismaClient } = require('../generated/prisma')
const prisma = new PrismaClient()

const categories = ["Sword", "Spear", "Staff", "Bow", "Shield", "Exotic"]
const items = [
  "brown-sword", "brown-spear", "brown-staff", "brown-bow", "brown-shield", "brown-exotic",
  "bronze-sword", "bronze-spear", "bronze-staff", "bronze-bow", "bronze-shield", "bronze-exotic",
  "grey-sword", "grey-spear", "grey-staff", "grey-bow", "grey-shield", "grey-exotic",
  "white-sword", "white-spear", "white-staff", "white-bow", "white-shield", "white-exotic",
  "black-sword", "black-spear", "black-staff", "black-bow", "black-shield", "black-exotic",
  "gold-sword", "gold-spear", "gold-staff", "gold-bow", "gold-shield", "gold-exotic",
  "teal-sword", "teal-spear", "teal-staff", "teal-bow", "teal-shield", "teal-exotic"
]

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

async function main() {
  categories.forEach(async (e) => {
    await prisma.category.upsert({
      where: { name: e },
      update: { name: e },
      create: { name: e }
    })
  })
  items.forEach(async (item, idx) => {
    let associatedCategory = await prisma.category.findUnique({
      where: { name: categories[idx % categories.length] }
    })
    await prisma.item.create({
      data: {
        name: toTitleCase(item.replace("-", " ")),
        price: parseFloat((Math.random() * 8).toFixed(2)),
        quantity: Math.floor(Math.random() * 8) + 1,
        imageKey: "pixelweapons",
        imageId: item,
        category: {
          connect: { id: associatedCategory.id }
        }
      }
    })
  })

  console.log("Finished seeding data...")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

