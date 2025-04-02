import { getAllShops } from "@/prisma-db";
import Link from "next/link";

export default async function Home() {
  const shops = await getAllShops();
  return (
    <div>
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
