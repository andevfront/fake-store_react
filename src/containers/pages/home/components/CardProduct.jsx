import { HiShoppingCart } from "react-icons/hi";

export const CardProduct = ({ title, image, description, price }) => {
  return (
    <div className="col-span-3 bg-white p-3 rounded-lg">
      <figure className="h-[190px]">
        <img className="h-full w-full object-contain" src={image} alt="" />
      </figure>
      <h1 className="line-clamp-2">{title}</h1>
      <p className="line-clamp-4">{description}</p>
      <b>${price}</b>
      <button>
        <HiShoppingCart />
        Agregar al carro
      </button>
    </div>
  );
};
