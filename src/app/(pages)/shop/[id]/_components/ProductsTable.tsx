"use client";

import { useCallback, useState } from "react";
import { ProductForm } from "./ProductForm";
import { Product } from "@/types/Product";
import { ProductLine } from "./ProductLine";

type Props = {
  shopId: number;
  products: Product[];
};

export const ProductTable = ({ shopId, products }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <ProductLine
            product={product}
            selectedProductId={selectedProduct}
            onSelectClick={() => setSelectedProduct(product.id)}
            onDeselectClick={() => setSelectedProduct(null)}
          />
        ))}
      </ul>
      {selectedProduct ? null : <ProductForm shopId={shopId} />}
    </div>
  );
};
