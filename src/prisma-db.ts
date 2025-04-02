import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const waitRandomly = async (min = 500, max = 1000) => {
  const diff = max - min;
  const random = min + Math.random() * diff;
  await new Promise((resolve) => setTimeout(resolve, random));
};

export async function getAllShops() {
  await waitRandomly();
  return await prisma.shop.findMany();
}

export async function getShop(id: number) {
  await waitRandomly();
  return await prisma.shop.findUnique({ where: { id }, select: { name: true, products: true } });
}

export async function createShop(shopName: string) {
  await waitRandomly();
  return await prisma.shop.create({ data: { name: shopName } });
}

export async function updateShopName(id: number, name: string) {
  await waitRandomly();
  return await prisma.shop.update({ where: { id }, data: { name } });
}

export async function createShopProduct(shopId: number, productName: string, quantity: number) {
  console.log('inside', { shopId, productName, quantity });
  await waitRandomly();
  return await prisma.product.create({ data: { name: productName, quantity, shopId } });
}
