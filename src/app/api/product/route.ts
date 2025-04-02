import { createShopProduct, deleteShopProduct } from "@/prisma-db";
import { NextResponse } from "next/server";


export const POST = async (req: Request) => {
  try {
    const { name, quantity, shopId } = await req.json();
    const result = await createShopProduct(shopId, name, quantity);
    return NextResponse.json(result, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const { id } = await req.json();
    const result = await deleteShopProduct(id);
    return NextResponse.json(result, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};
