import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const url = "https://bookstore-api-six.vercel.app/api/books/";
const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`${url}${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getProduct();
  }, [productId]);
  return (
    <section>
        <h2>Product Page</h2>
        <p>Render the product id from the URL below this</p>
        <p>Product ID: {productId}</p>
        <p>Product Title: {product?.title}</p>
        <p>Product Author: {product?.author}</p>
    </section>
  )
}

export default Product