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

export async function deleteShop(id: number) {
  await waitRandomly();
  return await prisma.shop.delete({ where: { id } });
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
  await waitRandomly();
  return await prisma.product.create({ data: { name: productName, quantity, shopId } });
}

export async function updateShopProduct(id: number, name: string, quantity: number) {
  await waitRandomly();
  return await prisma.product.update({ where: { id }, data: { quantity, name } });
}

export async function deleteShopProduct(id: number) {
  await waitRandomly();
  return await prisma.product.delete({ where: { id } });
}
