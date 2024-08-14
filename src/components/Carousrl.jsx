import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = ({ products }) => {
  return (
    <div className="py-20 text-center w-full mx-auto bg-white text-black">
      <Slider {...settings} arrows={false}>
        {products.map((product, i) => (
          <div key={i} className="p-5">
            <Card product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
