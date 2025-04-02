"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  shopId: number;
  product?: { name: string; quantity: number; id: number };
};

export const ProductForm = ({ shopId, product }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [productName, setProductName] = useState(product?.name ?? "");
  const [productQuantity, setProductQuantity] = useState(
    product?.quantity ?? 0
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        setIsLoading(true);
        const apiBody = {
          name: productName,
          quantity: productQuantity,
          ...(product ? { id: product.id } : { shopId }),
        };
        await fetch("/api/product", {
          method: product ? "PUT" : "POST",
          body: JSON.stringify(apiBody),
        });
        router.refresh();
      } finally {
        setIsLoading(false);
      }
    },
    [productName, productQuantity, shopId]
  );

  const onQuantityChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(target.value);
      if (value < 0) return;
      setProductQuantity(value ?? "");
    },
    [setProductQuantity]
  );

  useEffect(() => {
    inputRef.current?.focus();
    inputRef.current?.select();
  }, [inputRef.current]);

  const isInputValid =
    productName &&
    productQuantity &&
    (productQuantity !== product?.quantity || productName !== product?.name);
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="product name"
        disabled={isLoading}
        ref={inputRef}
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="number"
        placeholder="quantity"
        disabled={isLoading}
        value={productQuantity}
        onChange={onQuantityChange}
      />
      <button disabled={!isInputValid || isLoading}>create</button>
    </form>
  );
};
