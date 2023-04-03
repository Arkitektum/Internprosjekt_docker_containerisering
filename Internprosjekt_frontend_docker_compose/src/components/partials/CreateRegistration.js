import { useState } from "react";

function CreateRegistration({ onSubmitRegistration }) {
    const [organisationName, setOrganisationName] = useState();
    const [amountTrash, setAmountTrash] = useState(0);

    function handleOnSubmit(event) {
        event.preventDefault();
        onSubmitRegistration({
            organisationName,
            amountTrash,
        });
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <h2>Add Registration</h2>
            <label htmlFor="organisation name">Organisation Name</label>
            <input id="organisation name" type="text" onChange={(e) => setOrganisationName(e.target.value)} />

            <label htmlFor="amount trash">Amount Trash (kg)</label>
            <input id="amount trash" type="number" onChange={(e) => setAmountTrash( parseInt(e.target.value))} />

            <button type="submit">Create registration</button>
        </form>
    );
}

export default CreateRegistration;
