import { getShop } from "@/prisma-db";
import { notFound } from "next/navigation";
import { ProductForm } from "./_components/ProductForm";
import Link from "next/link";
import Image from "next/image";
import { ProductTable } from "./_components/ProductsTable";

const ShopDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const shop = await getShop(Number(id));
  if (!shop) notFound();
  console.log(shop.products);
  return (
    <div>
      <header className="flex align-middle">
        <h2 className="mr-3">{shop.name}</h2>
        <Link href={`/shop/${id}/update-name`} className="flex">
          <Image src="/edit.svg" alt="edit" width={20} height={20} />
        </Link>
      </header>
      <ProductTable shopId={+id} products={shop.products} />
    </div>
  );
};

export default ShopDetailsPage;
