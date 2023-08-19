import { useQuery } from "react-query";
import { getAllProducts } from "../../../../services";
import { CardProduct } from "./CardProduct";

export const GridProducts = () => {
  const { data: products, isLoading } = useQuery(["products"], getAllProducts, {
    refetchOnWindowFocus: false,
  });

  console.log(products);

  if (isLoading) return;

  return (
    <div className="container mx-auto px-4 py-5 grid grid-cols-12 gap-5">
      {products.map((product) => (
        <CardProduct key={product.id} {...product} />
      ))}
    </div>
  );
};
