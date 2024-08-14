import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import WhiteBtn from "../components/buttons/WhiteBtn";
import HomeCard from "../components/HomeCard";
import { CartProvider } from "../context/CartContext";
import Carousel from "../components/Carousrl";
import { CategoryProducts } from "../APIs";

export default function Home() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sunglasses = await CategoryProducts("sunglasses");
        const accessories = await CategoryProducts("sports-accessories");
        setProducts([...sunglasses, ...accessories]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  const CARDS = [
    {
      id: 1,
      title: "For Women",
      text: " Celebrate Your Unique Beauty with Products Designed to Empower,Inspire, and Elevate Every Woman's Style.",
      nav: "/women",
    },
    {
      id: 2,
      title: "For Men",
      text: "Discover the Power of Self-Expression with Products that Help Men Unleash TheirInner Strength and Confidence.",
      nav: "/men",
    },
    {
      id: 3,
      title: "Electronics",
      text: "Explore the latest in technology and innovation with our curated selection of electronics.",
      nav: "/electronics",
    },
  ];
  return (
    <div>
      <div className="h-screen w-full relative">
        <div className="fixed -z-10 w-full h-full bg-[url('./assets/imgs/home.png')] bg-cover bg-center" />
        <div className="w-full md:h-24 h-16 absolute">
          <Nav dark={false} />
        </div>

        <div className="w-full h-full bg-primary/30 text-white  flex items-center">
          <div className="flex flex-col md:gap-20 gap-10 text-start md:p-20 p-6">
            <div className="  md:text-6xl text-3xl flex flex-col md:gap-5 gap-2 font-semibold text-shadow-md ">
              <p>Get up to 15% off</p>
              <p className="text-primary "> New Arrivals</p>
            </div>
            <p className="md:text-2xl text-base text-white/60 ">
              Introducing our latest collection of products
            </p>
            <WhiteBtn
              title="Take a look"
              onClick={() => {
                navigate("/all");
              }}
              className="py-1"
            />
          </div>
          <button className="flex justify-center items-center md:text-base text-xs absolute bottom-10 left-1/2 -translate-x-1/2 ">
            SCROLL DOWN
            <img src="../assets/imgs/down.gif" className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="md:h-[80vh] h-[50vh] md:p-10 p-3 bg-white">
        <div className=" w-full h-full grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 md:gap-10 gap-3 md:text-4xl text-xl">
          <div className=" grid md:grid-rows-2 md:grid-cols-1 grid-cols-2 md:gap-10 gap-3">
            <HomeCard
              title={CARDS[0].title}
              text={CARDS[0].text}
              onClick={() => {
                navigate(CARDS[0].nav);
              }}
              bg="bg-[url('./assets/imgs/women.png')] "
            />
            <HomeCard
              title={CARDS[1].title}
              text={CARDS[1].text}
              onClick={() => {
                navigate(CARDS[1].nav);
              }}
              bg="bg-[url('./assets/imgs/men.png')] "
            />
          </div>
          <HomeCard
            title={CARDS[2].title}
            text={CARDS[2].text}
            onClick={() => {
              navigate(CARDS[2].nav);
            }}
            bg="bg-[url('https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] "
          />
        </div>
      </div>
      <div>
        <Carousel products={products} />
      </div>
    </div>
  );
}
