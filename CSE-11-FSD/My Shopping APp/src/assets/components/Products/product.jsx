import React,{useState} from 'react'
import ProductCard from './ProductCard';
function Product() {
   const [response, setResponse] = useState([]);

  async function fetchUserData() {
    const url = "https://dummyjson.com/products?limit=8";

    try {
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      console.log(data);

      setResponse(data.products);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  }
  fetchUserData();

  return (
    <div id="productFlex">
      {response.map((item)=>(<ProductCard key={item.id} props={item}/>))}
    </div>
  )
}

export default Product