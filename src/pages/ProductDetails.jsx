import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import Button from "../components/buttons/Button";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state;
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="md:h-24 h-16">
        <Nav dark={true} />
      </div>
      <div className=" w-full h-[calc(100vh-500px)] grid grid-cols-2 p-10 gap-20">
        <div className="w-full h-full bg-primary/10 flex justify-center items-center">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-[80%] h-[80%] object-cover "
          />
        </div>

        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex justify-between items-center text-black/50">
            <p className=" capitalize ">{product.category}</p>
            <div className="flex justify-between items-center">
              <FaStar color="gold" />
              <p>{product.rating}</p>
            </div>
          </div>
          <h1 className="text-6xl leading-[80px] font-serif">
            {product.title}
          </h1>
          <div className="flex flex-col justify-start gap-2">
            <p className="text-black/50 line-through">${product.price}</p>
            <p className=" text-primary font-semibold text-2xl">
              $
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(1)}
            </p>
          </div>
          <p>{product.description}</p>
          <div className="flex gap-5">
            <div className="px-2 h-10 border-2 border-black flex justify-start items-center gap-4 ">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <Button title=" ADD TO CART" onClick={() => addToCart(product)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
