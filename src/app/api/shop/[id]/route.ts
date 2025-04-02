import { deleteShop } from "@/prisma-db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

type Params = { params: Promise<{ id: string }> }

export const DELETE = async (req: Request, { params }: Params) => {
  const { id } = await params;
  try {
    const result = await deleteShop(+id);
    return NextResponse.json(result, { status: 200 });
  } catch (ex) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};