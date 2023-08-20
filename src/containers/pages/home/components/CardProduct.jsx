import { HiShoppingCart } from "react-icons/hi";

export const CardProduct = ({ title, image, description, price }) => {
  return (
    <div className="col-span-3 bg-white p-3 rounded-lg">
      <figure className="h-[190px]">
        <img className="h-full w-full object-contain" src={image} alt="" />
      </figure>
      <h1 className="font-bold text-lg my-4 text-primary line-clamp-1">
        {title}
      </h1>
      <p className="text-slate-500 my-2 line-clamp-3">{description}</p>
      <b className="block font-bold text-lg text-primary">${price}</b>
      <button className="flex justify-center items-center text-primary gap-2 border-2 border-primary rounded-lg w-full mt-4 py-2 transition-all duration-300 hover:text-white hover:bg-primary">
        <HiShoppingCart />
        Agregar al carro
      </button>
    </div>
  );
};
