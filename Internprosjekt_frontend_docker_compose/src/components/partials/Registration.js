
function Registration({ registration }) {
    return (
        <div>
            <div>
                <h2>
                    {registration.id} - {registration.organisationName} {registration.amountTrash}
                </h2>
            </div>
        </div>
    );
}

export default Registration;
