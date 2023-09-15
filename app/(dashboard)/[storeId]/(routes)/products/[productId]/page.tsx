import prismaDb from "@/lib/prismadb";
import React from "react";
import { ProductForm } from "./components/product-form";

const ProductsPage = async ({
  params,
}: {
  params: { productId: string; storeId: string };
}) => {
  const product = await prismaDb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      Image: true,
    },
  });

  const categories = await prismaDb.category.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const sizes = await prismaDb.size.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const colors = await prismaDb.color.findMany({
    where: {
      storeId: params.storeId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <ProductForm
          categories={categories}
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  );
};

export default ProductsPage;
