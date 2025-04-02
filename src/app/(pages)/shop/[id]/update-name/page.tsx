import { getShop } from "@/prisma-db";
import { notFound } from "next/navigation";
import { ShopForm } from "../../_components/ShopForm";

const ShopNameUpdatePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const shop = await getShop(Number(id));
  if (!shop) notFound();
  const shopProps = {
    id: +id,
    name: shop.name,
  };
  return <ShopForm shop={shopProps} />;
};

export default ShopNameUpdatePage;
