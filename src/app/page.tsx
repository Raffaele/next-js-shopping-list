import { getAllShops } from "@/prisma-db";
import Link from "next/link";

export default async function Home() {
  const shops = await getAllShops();
  return (
    <div>
      <header className="flex justify-between">
        <h2>Shop list</h2>
        <Link href="/shop/new">Create</Link>
      </header>
      <hr className="mb-5" />
      <ul className="px-5">
        {shops.map(({ id, name }) => (
          <li key={id} className="pb-2  border-b-2 mb-2">
            <Link href={`/shop/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
