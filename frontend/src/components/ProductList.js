import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import ProductCard from "./ProductCard";

const ProductList = () => {
	  const dispatch = useDispatch();
	  const { loading, products, error } = useSelector((state) => state.products);

	  useEffect(() => {
		      dispatch(getProducts());
		    }, [dispatch]);

	  if (loading) return <p>Loading...</p>;
	  if (error) return <p>Error: {error}</p>;

	  return (
		      <div>
		        {products.map((product) => (
				        <ProductCard key={product.id} product={product} />
				      ))}
		      </div>
		    );
};

export default ProductList;
