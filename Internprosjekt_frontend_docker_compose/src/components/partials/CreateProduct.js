import { useState } from "react";

function CreateProduct({ onSubmitProduct }) {
    const [brand, setBrand] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [thumbnail, setThumbnail] = useState();

    function handleOnSubmit(event) {
        event.preventDefault();
        onSubmitProduct({
            title,
            description,
            brand,
            price,
            thumbnail
        });
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h2>Add product</h2>
            <label htmlFor="brand">Brand</label>
            <input id="brand" type="text" onChange={(e) => setBrand(e.target.value)} />

            <label htmlFor="title">Title</label>
            <input id="title" type="text" onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={(e) => setDescription(e.target.value)} />

            <label htmlFor="price">Price</label>
            <input id="price" type="number" onChange={(e) => setPrice(e.target.value)} />

            <label htmlFor="thumbnail">Thumbnail URL</label>
            <input id="thumbnail" type="text" onChange={(e) => setThumbnail(e.target.value)} />

            <button type="submit">Create product</button>
        </form>
    );
}

export default CreateProduct;
