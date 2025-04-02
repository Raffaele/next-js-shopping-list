import { deleteShopProduct, updateShopProduct } from "@/prisma-db";
import { NextResponse } from "next/server";

type Params = {
  params: Promise<{ id: string }>;
}

export const PUT = async (req: Request) => {
  try {
    const { name, quantity, id } = await req.json();
    const result = await updateShopProduct(+id, name, quantity);
    return NextResponse.json(result, { status: 200 });
  } catch (ex) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
export const DELETE = async (req: Request, { params }: Params) => {
  const { id } = await params;
  try {
    const result = await deleteShopProduct(+id);
    return NextResponse.json(result, { status: 200 });
  } catch (ex) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};