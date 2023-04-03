import { useState } from "react";
import Product from "./components/partials/Product";
import Registration from "./components/partials/Registration";
import CreateProduct from "./components/partials/CreateProduct";
import Dialog from "./components/template/Dialog";
import CreateRegistration from "./components/partials/CreateRegistration";

function App() {
    const [productsData, setProductsData] = useState({
        total: 0,
        products: []
    });

    const [registrationData, setRegistrationData] = useState({
        total: 0,
        registrations: []
    });
    const [showDialog, setShowDialog] = useState(false);
    const [showRegistrationDialog, setShowRegistrationDialog] = useState(false);


    async function getProductsData() {
        const response = await fetch("https://dummyjson.com/products?limit=10");
        const json = await response.json();
        setProductsData(json);
    }

    async function getRegistrationData() {
        const response = await fetch("http://localhost:8080/baerekraft/getRegistrations");
        const json = await response.json();
        setRegistrationData({"total": registrationData.total+1, "registrations": json});
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

    async function handleOnSubmitRegistration(registration) {
        console.log("registration: ", registration);
        registration.id = Math.round(Math.random()*100);
        const httpBody = JSON.stringify(registration);
        console.log("httpBody: ", httpBody);

        const response = await fetch("http://localhost:8080/baerekraft/postRegistration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: httpBody
        });
        const newRegistration = await response.json();

        console.log("registrationData: ", registrationData);
        const newRegistrationData = {
            ...registrationData,
            total: registrationData.total + 1,
            registrations: [...registrationData.registrations, newRegistration]
        };
        setRegistrationData(newRegistrationData);
        setShowRegistrationDialog(false);
    }

    function renderProducts(productsData) {
        return productsData?.products?.length
            ? productsData.products.map((product) => {
                  return <Product key={product.id} product={product} />;
              })
            : null;
    }

    function renderRegistrations(registrationData) {
        return registrationData.registrations?.length
            ? registrationData.registrations.map((registration) => {
                  return <Registration key={registration.id} registration={registration} />;
              })
            : null;
    }

    return (
        <div>
            <h1>Products</h1>
            <button onClick={getProductsData}>Get products</button>
            <button onClick={() => setShowDialog(true)}>Add product</button>
            <button onClick={() => setShowRegistrationDialog(true)}>Send inn bærekraftsregistrering</button>
            <button onClick={getRegistrationData}>Get registrations</button>
            <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
                <CreateProduct onSubmitProduct={handleOnSubmitProduct} />
            </Dialog>
            <Dialog open={showRegistrationDialog} onClose={() => setShowRegistrationDialog(false)}>
                <CreateRegistration onSubmitRegistration={handleOnSubmitRegistration} />
            </Dialog>
            {renderProducts(productsData)}
            {renderRegistrations(registrationData)}
        </div>
    );
}

export default App;
