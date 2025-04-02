import { Product } from "@/types/Product";
import { ProductForm } from "./ProductForm";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  product: Product;
  selectedProductId: number | null;
  onSelectClick: () => void;
  onDeselectClick: () => void;
};

export const ProductLine = ({
  product,
  selectedProductId,
  onSelectClick,
  onDeselectClick,
}: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onDelete = useCallback(async () => {
    try {
      setIsLoading(true);
      await fetch(`/api/product`, {
        method: "DELETE",
        body: JSON.stringify({ id: product.id }),
      });
      router.refresh();
    } catch {
    } finally {
      setIsLoading(false);
    }
  }, [product.id]);
  if (selectedProductId === product.id) {
    return (
      <li className="flex justify-between">
        <ProductForm shopId={1} product={product} onUpdate={onDeselectClick} />
        <button onClick={onDeselectClick}>Cancel</button>
      </li>
    );
  }
  return (
    <li className="flex justify-between">
      {product.name} ({product.quantity})
      <div>
        <button onClick={onSelectClick} disabled={isLoading}>
          Select
        </button>
        <button onClick={onDelete} disabled={isLoading}>
          delete
        </button>
      </div>
    </li>
  );
};
