import React from "react";
import { BiListPlus } from "react-icons/bi";
import { BsCartX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div className="shadow-lg relative rounded-3xl border  p-3 flex flex-col text-indigo-900">
      {product.quantity > 0 && (
        <div className="absolute top-2 text-white right-2 bg-indigo-500 px-3 text-lg font-bold  rounded-full">
          {product.quantity}
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, idx) => {
            return (
              <li key={idx} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFromCart(product))}
            title="Remove from cart"
            className="bg-red-500 flex justify-center items-center gap-3 text-base font-semibold rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Remove from cart
            <BsCartX className="text-white" size={20} />
          </button>
        )}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
