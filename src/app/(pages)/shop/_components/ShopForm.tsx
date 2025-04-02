"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  shop?: { id: number; name: string };
};

export const ShopForm = ({ shop }: Props) => {
  const router = useRouter();
  const [name, setName] = useState(shop?.name ?? "");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        await fetch("/api/shop", {
          method: shop ? "PUT" : "POST",
          body: JSON.stringify(shop ? { name, id: shop.id } : { name }),
        });
        router.push(shop ? `/shop/${shop.id}` : "/");
      } catch (e) {
        console.log(e);
      }
    },
    [shop, name, router]
  );
  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, [inputRef.current]);
  return (
    <form onSubmit={handleSubmit} className="m-auto w-1/2">
      <fieldset className="border-4 border-solid border-gray-300 p-3 rounded-lg">
        <legend className="text-sm">
          {shop ? `Update Shop (${shop.name})` : "Create Shop"}
        </legend>
        <label className="flex flex-col mb-10">
          Name
          <input
            type="text"
            placeholder="Shop name"
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <div className="text-center">
          <button type="submit" disabled={!name || name === shop?.name}>
            {shop ? "Update" : "Create"}
          </button>
        </div>
      </fieldset>
    </form>
  );
};
