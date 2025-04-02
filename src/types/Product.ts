import { Product as DbProduct } from '@prisma/client';

export type Product = Omit<DbProduct, 'id' | 'shopId'> & { id: number };