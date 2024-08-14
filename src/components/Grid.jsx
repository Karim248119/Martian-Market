import React from "react";
import Card from "./Card";

export default function Grid({ products }) {
  return (
    <div className="w-full p-10 grid md:grid-cols-5 grid-cols-1 gap-5">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
