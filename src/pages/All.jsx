import React, { useEffect, useState } from "react";
import { AllProducts } from "../APIs";
import Grid from "../components/Grid";
import Nav from "../components/Nav";

function All() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await AllProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Nav dark={true} />
      <Grid products={products} />
    </div>
  );
}

export default All;
