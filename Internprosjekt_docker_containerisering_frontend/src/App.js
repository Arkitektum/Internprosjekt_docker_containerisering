import { useState } from "react";
import Product from "./components/partials/Product";

function App() {
  const [productsData, setProductsData] = useState("Helge");

  async function getProductsData() {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    setProductsData(json);
  }

  function renderProducts(productsData) {
    return (
      productsData?.products?.length && 
      productsData.products.map((product) => {
        return (
          <Product key={product.id} product={product} />
        )
      })
    )
  }



  return (
    <div>
      <button onClick={getProductsData}>
        Get products
      </button>
      {renderProducts(productsData)}
    </div>
  );
}

export default App;