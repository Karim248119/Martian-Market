import React from "react";

export default function Filter({
  categories,
  selectedCategory,
  FilterProducts,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          className={` border-2 py-1 px-2 inline-flex items-center ${
            selectedCategory === category.slug
              ? "text-primary border-primary"
              : "hover:text-primary hover:border-primary border-black/30 text-black/30"
          }`}
          onClick={() => FilterProducts(category.slug)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
