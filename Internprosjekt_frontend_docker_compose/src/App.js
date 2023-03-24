import { useState } from "react";
import Product from "./components/partials/Product";
import CreateProduct from "./components/partials/CreateProduct";
import Dialog from "./components/template/Dialog";

function App() {
    const [productsData, setProductsData] = useState({
        total: 0,
        products: []
    });
    const [showDialog, setShowDialog] = useState(false);

    async function getProductsData() {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const json = await response.json();
        setProductsData(json);
    }

    async function handleOnSubmitProduct(product) {
        const response = await fetch("https://dummyjson.com/products/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        });
        const newProduct = await response.json();

        const newProductsData = {
            ...productsData,
            total: productsData.total + 1,
            products: [...productsData.products, newProduct]
        };
        setProductsData(newProductsData);
        setShowDialog(false);
    }

    function renderProducts(productsData) {
        return productsData?.products?.length
            ? productsData.products.map((product) => {
                  return <Product key={product.id} product={product} />;
              })
            : null;
    }

    return (
        <div>
            <h1>Products</h1>
            <button onClick={getProductsData}>Get products</button>
            <button onClick={() => setShowDialog(true)}>Add product</button>
            <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <CreateProduct onSubmitProduct={handleOnSubmitProduct} />
            </Dialog>
            {renderProducts(productsData)}
        </div>
    );
}

export default App;
