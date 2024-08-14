import React, { useContext } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Card({ product }) {
  const totalStars = 5;
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  return (
    <div className="w-full h-[400px] p-3 rounded-lg shadow-lg bg-white  ">
      <button className="  w-full h-[60%] rounded-md bg-primary/10 hover:bg-primary/30 flex justify-center items-center relative">
        <img
          onClick={() => {
            navigate("/product-detail", {
              state: { product },
            });
          }}
          src={product.images[0]}
          alt={product.name}
          className="w-[100%] h-[100%] object-cover rounded-md"
        />
      </button>
      <div className="w-full h-[40%]  flex flex-col items-center justify-between capitalize text-center pt-5 relative">
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="h-10 w-10 flex justify-center items-center bg-white shadow
          rounded-full text-primary absolute -top-5 left-1/2
          -translate-x-1/2 hover:bg-primary hover:text-white z-50"
        >
          <FiShoppingCart />
        </button>
        <p className="text-black/50 text-sm ">{product.category}</p>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-primary text-sm">
            {Array.from({ length: totalStars }, (_, index) =>
              index < product.rating ? (
                <FaStar key={index} />
              ) : (
                <FaRegStar key={index} />
              )
            )}
          </div>
          <p className="text-xs text-black/50">({product.rating})</p>
        </div>

        <p className="font-semibold">{product.title}</p>
        <div className="flex justify-center items-center gap-2">
          <p className=" text-primary font-semibold text-base">
            $
            {(
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(1)}
          </p>
          <p className="text-black/50 line-through text-xs">${product.price}</p>
        </div>
      </div>
    </div>
  );
}
