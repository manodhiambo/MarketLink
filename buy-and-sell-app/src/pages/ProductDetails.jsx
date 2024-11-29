import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
	  const { id } = useParams();
	const [product, setProduct] = useState(null);
	  const [loading, setLoading] = useState(true);
	  const [error, setError] = useState('');

	useEffect(() => {
		const fetchProductDetails = async () => {
			      try {
				      const response = await fetch(`/api/products/${id}`);
				              if (!response.ok) {
						                throw new Error('Product not found');
						              }
				              const data = await response.json();
				              setProduct(data);
				              setLoading(false);
				            } catch (err) {
						            setError(err.message);
						            setLoading(false);
						          }
			    };

		    fetchProductDetails();
		  }, [id]);

	if (loading) {
		    return <div>Loading...</div>;
		  }

	  if (error) {
		      return <div className="error-message">{error}</div>;
		    }

	  if (!product) {
		      return <div>Product not found.</div>;
		    }

	  return (
		      <div className="product-details-container">
		        <h2>{product.name}</h2>
		        <div className="product-image">
		          <img src={product.imageUrl} alt={product.name} />
		        </div>
		        <p><strong>Price:</strong> ${product.price}</p>
		        <p><strong>Description:</strong> {product.description}</p>
		        <p><strong>Category:</strong> {product.category}</p>
		        <div className="product-actions">
		          <button>Add to Cart</button>
		          <button>Buy Now</button>
		        </div>
		      </div>
		    );
}

export default ProductDetails;
