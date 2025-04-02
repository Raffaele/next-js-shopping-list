import { createShop, updateShopName } from "@/prisma-db";

export const POST = async (req: Request) => {
  const { name } = await req.json();
  return await createShop(name);
};

export const PUT = async (req: Request) => {
  const { name, id } = await req.json();
  return await updateShopName(+id, name);
};