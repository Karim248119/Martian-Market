import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Nav from "../components/Nav";
import Button from "../components/buttons/Button";
import { CiTrash } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <Nav dark={true} />
      <div className="flex md:flex-row flex-col gap-20">
        <div className=" flex flex-col md:gap-10 gap-5 md:w-2/3 md:p-10 p-2 pb-40 md:pb-0">
          {cart.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full md:gap-10 gap-3 md:h-40 h-32 "
              >
                <div className="h-full w-32 bg-primary/10">
                  <img
                    onClick={() => {
                      navigate("/product-detail", {
                        state: { item },
                      });
                    }}
                    src={item.images[0]}
                    alt={item.name}
                    className="w-[100%] h-[100%] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col justify-between w-full py-2">
                  <h2 className="md:text-2xl text-base uppercase">
                    {item.title}
                  </h2>
                  <p className="md:text-lg text-sm text-black/30">
                    ${item.price}
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <div className="md:h-10 md:w-28 h-6 w-16 md:text-base text-xs border-2 border-black grid grid-cols-3   items-center  ">
                      <button className="hover:bg-primary hover:text-white h-full w-full  ">
                        -
                      </button>
                      <p className="text-center">1</p>
                      <button
                        className="hover:bg-primary hover:text-white h-full w-full  "
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-black/50 flex items-center border-b-[1px] border-black/30 md:text-sm text-[10px] hover:text-red-500 hover:border-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <CiTrash /> Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="md:w-1/3 md:p-10 p-5 flex flex-col  md:gap-10 gap-4 fixed md:right-0 md:bottom-auto bottom-0 bg-white w-full">
          <h2 className=" md:text-4xl uppercase"> Shoping Info</h2>
          <div className="flex justify-between">
            <p>Total</p>
            <p>555</p>
          </div>
          <Button title="CHECKOUT" />
        </div>
      </div>
    </div>
  );
}
